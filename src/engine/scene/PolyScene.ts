import {CamerasController} from './utils/CamerasController';
import {Cooker} from './utils/Cooker';
import {CookController} from './utils/CookController';
import {CoreGraph} from '../../core/graph/CoreGraph';
import {CorePerformance} from '../../core/performance/CorePerformance';
import {DispatchController} from './utils/DispatchController';
import {ExpressionsController} from './utils/ExpressionsController';
import {LifeCycleController} from './utils/LifeCycleController';
import {LoadingController} from './utils/LoadingController';
import {MissingReferencesController} from './utils/MissingReferencesController';
import {NodesController} from './utils/NodesController';
import {PolySceneSerializer} from './utils/Serializer';
import {SceneEventsDispatcher} from './utils/events/EventsDispatcher';
import {ObjectsController} from './utils/ObjectsController';
import {ReferencesController} from './utils/ReferencesController';
import {onTimeTickHook, TimeController} from './utils/TimeController';
import {UniformsController} from './utils/UniformsController';
import {ViewersRegister} from './utils/ViewersRegister';
import {WebGLController} from './utils/WebGLController';
import {SceneAssetsController} from './utils/AssetsController';
import {BaseNodeType} from '../nodes/_Base';
import {ObjNodeChildrenMap} from '../poly/registers/nodes/Obj';
import {ParamsInitData} from '../nodes/utils/io/IOController';
import {Constructor, valueof} from '../../types/GlobalTypes';
import {Scene} from 'three/src/scenes/Scene';

export class PolyScene {
	threejsScene(): Scene {
		return this.root().object;
	}
	private _uuid!: string;
	setUuid(uuid: string) {
		return (this._uuid = uuid);
	}
	get uuid() {
		return this._uuid;
	}
	private _name: string | undefined;
	setName(name: string) {
		return (this._name = name);
	}
	name() {
		return this._name;
	}

	protected _cameras_controller = new CamerasController(this);
	get camerasController() {
		return this._cameras_controller;
	}
	masterCameraNode() {
		return this.camerasController.masterCameraNode();
	}

	private _cooker = new Cooker(this);
	get cooker() {
		return this._cooker;
	}

	// private _cube_cameras_controller: CubeCamerasController;
	// get cube_cameras_controller() {
	// 	return (this._cube_cameras_controller = this._cube_cameras_controller || new CubeCamerasController(this));
	// }
	private _assets_controller: SceneAssetsController | undefined;
	get assets() {
		return (this._assets_controller = this._assets_controller || new SceneAssetsController());
	}

	public readonly cookController = new CookController();
	async waitForCooksCompleted() {
		return this.cookController.waitForCooksCompleted();
	}

	private _dispatch_controller: DispatchController | undefined;
	get dispatchController() {
		return (this._dispatch_controller = this._dispatch_controller || new DispatchController(this));
	}
	private _events_dispatcher: SceneEventsDispatcher | undefined;
	get eventsDispatcher() {
		return (this._events_dispatcher = this._events_dispatcher || new SceneEventsDispatcher(this));
	}

	private _graph = new CoreGraph();
	get graph() {
		return this._graph;
	}

	private _lifecycle_controller: LifeCycleController | undefined;
	get lifecycleController() {
		return (this._lifecycle_controller = this._lifecycle_controller || new LifeCycleController(this));
	}
	private _loading_controller: LoadingController | undefined;
	get loadingController() {
		return (this._loading_controller = this._loading_controller || new LoadingController(this));
	}

	private _missing_expression_references_controller: MissingReferencesController = new MissingReferencesController(
		this
	);
	get missingExpressionReferencesController() {
		return this._missing_expression_references_controller;
	}
	private _expressions_controller: ExpressionsController = new ExpressionsController();
	get expressionsController() {
		return this._expressions_controller;
	}

	protected _nodes_controller = new NodesController(this);
	get nodesController() {
		return this._nodes_controller;
	}
	createNode<S extends keyof ObjNodeChildrenMap>(
		node_class: S,
		params_init_value_overrides?: ParamsInitData
	): ObjNodeChildrenMap[S];
	createNode<K extends valueof<ObjNodeChildrenMap>>(
		node_class: Constructor<K>,
		params_init_value_overrides?: ParamsInitData
	): K;
	createNode<K extends valueof<ObjNodeChildrenMap>>(
		node_class: Constructor<K>,
		params_init_value_overrides?: ParamsInitData
	): K {
		return this.root().createNode(node_class, params_init_value_overrides) as K;
	}
	nodesByType(type: string) {
		return this.nodesController.nodesByType(type);
	}
	protected _objects_controller = new ObjectsController(this);
	get objectsController() {
		return this._objects_controller;
	}
	findObjectByMask(mask: string) {
		return this._objects_controller.findObjectByMask(mask);
	}
	objectsByMask(mask: string) {
		return this._objects_controller.objectsByMask(mask);
	}

	protected _references_controller = new ReferencesController(this);
	get referencesController() {
		return this._references_controller;
	}

	protected _performance: CorePerformance | undefined;
	get performance() {
		return (this._performance = this._performance || new CorePerformance());
	}

	protected _viewers_register: ViewersRegister | undefined;
	get viewersRegister() {
		return (this._viewers_register = this._viewers_register || new ViewersRegister(this));
	}

	//
	//
	// time
	//
	//
	protected _time_controller = new TimeController(this);
	get timeController() {
		return this._time_controller;
	}
	setFrame(frame: number) {
		this.timeController.setFrame(frame);
	}
	setFrameToStart() {
		this.timeController.setFrameToStart();
	}

	frame() {
		return this.timeController.frame();
	}
	time() {
		return this.timeController.time();
	}
	maxFrame() {
		return this.timeController.maxFrame();
	}
	play() {
		this.timeController.play();
	}
	pause() {
		this.timeController.pause();
	}

	//
	//
	// serializer
	//
	//
	private _serializer: PolySceneSerializer | undefined;
	private get serializer() {
		return (this._serializer = this._serializer || new PolySceneSerializer(this));
	}
	toJSON() {
		return this.serializer.toJSON();
	}
	private _read_only = false;
	private _read_only_requester: BaseNodeType | undefined;
	markAsReadOnly(requester: BaseNodeType) {
		if (this._read_only) {
			return;
		}
		this._read_only_requester = requester;
		this._read_only = true;
	}
	readOnly() {
		return this._read_only;
	}
	readOnlyRequester() {
		return this._read_only_requester;
	}

	//
	//
	// uniforms
	//
	//
	private _uniformsController: UniformsController | undefined;
	get uniformsController() {
		return (this._uniformsController = this._uniformsController || new UniformsController(this));
	}

	//
	//
	// webgl
	//
	//
	private _webgl_controller: WebGLController | undefined;
	get webgl_controller() {
		return (this._webgl_controller = this._webgl_controller || new WebGLController());
	}

	//
	//
	// constructor
	//
	//
	constructor() {
		// this.mark_as_loaded()
		this._graph.setScene(this);
		// this.time_controller.init();
		this.nodesController.init();
	}

	//
	//
	// cooker
	//
	//
	batchUpdates(callback: () => void) {
		this._cooker.block();

		callback();

		this._cooker.unblock();
	}

	//
	//
	// nodes
	//
	//
	node(path: string) {
		return this.nodesController.node(path);
	}
	root() {
		return this.nodesController.root();
	}

	//
	//
	// CALLBACKS
	//
	//
	registerOnBeforeTick(callbackName: string, callback: onTimeTickHook) {
		this.timeController.registerOnBeforeTick(callbackName, callback);
	}
	unRegisterOnBeforeTick(callbackName: string) {
		this.timeController.unRegisterOnBeforeTick(callbackName);
	}
	registeredBeforeTickCallbackNames() {
		return this.timeController.registeredBeforeTickCallbackNames();
	}
	registerOnAfterTick(callbackName: string, callback: onTimeTickHook) {
		this.timeController.registerOnAfterTick(callbackName, callback);
	}
	unRegisterOnAfterTick(callbackName: string) {
		this.timeController.unRegisterOnAfterTick(callbackName);
	}
	registeredAfterTickCallbackNames() {
		return this.timeController.registeredAfterTickCallbackNames();
	}
}
