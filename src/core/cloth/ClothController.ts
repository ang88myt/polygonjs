// import {ClothInputsController} from './modules/ClothInputsController';
import {ClothMaterialController} from './modules/ClothMaterialsController';
import {ClothGeometryInitController} from './modules/ClothGeometryInitController';
import {ClothFBOController} from './modules/ClothFBOController';
import {ClothOnBeforeRenderController} from './modules/ClothOnBeforeRenderController';
import {WebGLRenderer, Mesh, Vector3} from 'three';

export class ClothController {
	public readonly materials: ClothMaterialController;
	public readonly geometryInit: ClothGeometryInitController;
	// public readonly inputs: ClothInputsController;
	public readonly fbo: ClothFBOController;
	public readonly onBeforeRender: ClothOnBeforeRenderController;
	public stepsCount = 40;

	constructor(public clothObject: Mesh) {
		this.materials = new ClothMaterialController(this);
		this.geometryInit = new ClothGeometryInitController(this.clothObject);
		// this.inputs = new ClothInputsController(this);
		this.onBeforeRender = new ClothOnBeforeRenderController(this);
		this.fbo = new ClothFBOController(this);
	}

	init(renderer: WebGLRenderer) {
		this.fbo.init(renderer);
		this.onBeforeRender.init(this.clothObject);
	}

	update() {
		this.fbo.update();
	}

	private _selectedVertexIndex = -1;
	private _selectedVertexPosition = new Vector3();
	setSelectedVertexIndex(index: number | null) {
		if (index == null) {
			this._selectedVertexIndex = -1;
		} else {
			this._selectedVertexIndex = index;
		}
	}
	selectedVertexIndex() {
		return this._selectedVertexIndex;
	}
	setSelectedVertexPosition(position: Vector3) {
		this._selectedVertexPosition.copy(position);
	}
	selectedVertexPosition(target: Vector3) {
		target.copy(this._selectedVertexPosition);
	}
}
