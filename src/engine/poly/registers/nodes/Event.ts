import {CATEGORY_EVENT} from './Category';

import {AnimationEventNode} from '../../../nodes/event/Animation';
import {AnyEventNode} from '../../../nodes/event/Any';
import {AudioEventNode} from '../../../nodes/event/Audio';
import {BlockEventNode} from '../../../nodes/event/Block';
import {ButtonEventNode} from '../../../nodes/event/Button';
import {CameraDeviceOrientationControlsEventNode} from '../../../nodes/event/CameraDeviceOrientationControls';
import {CameraMapControlsEventNode} from '../../../nodes/event/CameraMapControls';
import {CameraOrbitControlsEventNode} from '../../../nodes/event/CameraOrbitControls';
import {DelayEventNode} from '../../../nodes/event/Delay';
// import {CodeEventNode} from '../../../nodes/event/Code';
import {DragEventNode} from '../../../nodes/event/Drag';
import {FirstPersonControlsEventNode} from '../../../nodes/event/FirstPersonControls';
import {IntersectDataEventNode} from '../../../nodes/event/IntersectData';
import {KeyboardEventNode} from '../../../nodes/event/Keyboard';
import {LimitEventNode} from '../../../nodes/event/Limit';
import {MessageEventNode} from '../../../nodes/event/Message';
import {MobileJoystickControlsEventNode} from '../../../nodes/event/MobileJoystickControls';
import {MouseEventNode} from '../../../nodes/event/Mouse';
import {NodeCookEventNode} from '../../../nodes/event/NodeCook';
import {NullEventNode} from '../../../nodes/event/Null';
import {ParamEventNode} from '../../../nodes/event/Param';
import {PlayerControlsEventNode} from '../../../nodes/event/PlayerControls';
import {PointerEventNode} from '../../../nodes/event/Pointer';
import {RaycastEventNode} from '../../../nodes/event/Raycast';
import {SceneEventNode} from '../../../nodes/event/Scene';
import {SetFlagEventNode} from '../../../nodes/event/SetFlag';
import {SetParamEventNode} from '../../../nodes/event/SetParam';
import {SequenceEventNode} from '../../../nodes/event/Sequence';
import {TimerEventNode} from '../../../nodes/event/Timer';
import {TouchEventNode} from '../../../nodes/event/Touch';
import {ViewerEventNode} from '../../../nodes/event/Viewer';
import {WindowEventNode} from '../../../nodes/event/Window';
// networks
import {AnimationsNetworkEventNode} from '../../../nodes/event/AnimationsNetwork';
import {AudioNetworkEventNode} from '../../../nodes/event/AudioNetwork';
import {CopNetworkEventNode} from '../../../nodes/event/CopNetwork';
import {EventsNetworkEventNode} from '../../../nodes/event/EventsNetwork';
import {MaterialsNetworkEventNode} from '../../../nodes/event/MaterialsNetwork';
import {PostProcessNetworkEventNode} from '../../../nodes/event/PostProcessNetwork';
import {RenderersNetworkEventNode} from '../../../nodes/event/RenderersNetwork';

export interface EventNodeChildrenMap {
	audio: AudioEventNode;
	animation: AnimationEventNode;
	any: AnyEventNode;
	block: BlockEventNode;
	button: ButtonEventNode;
	cameraDeviceOrientationControls: CameraDeviceOrientationControlsEventNode;
	cameraMapControls: CameraOrbitControlsEventNode;
	cameraOrbitControls: CameraMapControlsEventNode;
	delay: DelayEventNode;
	drag: DragEventNode;
	// code: CodeEventNode;
	firstPersonControls: FirstPersonControlsEventNode;
	intersectData: IntersectDataEventNode;
	keyboard: KeyboardEventNode;
	limit: LimitEventNode;
	message: MessageEventNode;
	mobileJoystickControls: MobileJoystickControlsEventNode;
	mouse: MouseEventNode;
	nodeCook: NodeCookEventNode;
	null: NullEventNode;
	param: ParamEventNode;
	playerControls: PlayerControlsEventNode;
	pointer: PointerEventNode;
	raycast: RaycastEventNode;
	scene: SceneEventNode;
	setFlag: SetFlagEventNode;
	setParam: SetParamEventNode;
	sequence: SequenceEventNode;
	timer: TimerEventNode;
	touch: TouchEventNode;
	viewer: ViewerEventNode;
	window: WindowEventNode;

	// networks
	animationsNetwork: AnimationsNetworkEventNode;
	audioNetwork: AudioNetworkEventNode;
	copNetwork: CopNetworkEventNode;
	eventsNetwork: EventsNetworkEventNode;
	materialsNetwork: MaterialsNetworkEventNode;
	postProcessNetwork: PostProcessNetworkEventNode;
	renderersNetwork: RenderersNetworkEventNode;
}

import {PolyEngine} from '../../../Poly';
export class EventRegister {
	static run(poly: PolyEngine) {
		poly.registerNode(AnimationEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(AnyEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(AudioEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(BlockEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(ButtonEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(CameraDeviceOrientationControlsEventNode, CATEGORY_EVENT.CAMERA);
		poly.registerNode(CameraMapControlsEventNode, CATEGORY_EVENT.CAMERA);
		poly.registerNode(CameraOrbitControlsEventNode, CATEGORY_EVENT.CAMERA);
		poly.registerNode(DelayEventNode, CATEGORY_EVENT.MISC);
		// poly.registerNode(CodeEventNode, CATEGORY_EVENT.ADVANCED);
		poly.registerNode(DragEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(FirstPersonControlsEventNode, CATEGORY_EVENT.CAMERA);
		poly.registerNode(IntersectDataEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(KeyboardEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(LimitEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(MessageEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(MobileJoystickControlsEventNode, CATEGORY_EVENT.CAMERA);
		poly.registerNode(MouseEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(NodeCookEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(NullEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(ParamEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(PlayerControlsEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(PointerEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(RaycastEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(SceneEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(SetFlagEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(SetParamEventNode, CATEGORY_EVENT.SCENE);
		poly.registerNode(SequenceEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(TimerEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(TouchEventNode, CATEGORY_EVENT.INPUT);
		poly.registerNode(ViewerEventNode, CATEGORY_EVENT.MISC);
		poly.registerNode(WindowEventNode, CATEGORY_EVENT.INPUT);
		// networks
		poly.registerNode(AnimationsNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(AudioNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(CopNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(EventsNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(MaterialsNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(PostProcessNetworkEventNode, CATEGORY_EVENT.NETWORK);
		poly.registerNode(RenderersNetworkEventNode, CATEGORY_EVENT.NETWORK);
	}
}
