import {BaseSopOperation} from './_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {InputCloneMode} from '../../poly/InputCloneMode';
import {DefaultOperationParams} from '../../../core/operations/_Base';
import {CameraSopNodeType} from '../../poly/NodeContext';
import {PolyScene} from '../../scene/PolyScene';
import {CoreObject} from '../../../core/geometry/Object';
import {CameraAttribute} from '../../../core/camera/CoreCamera';
import {
	MarkerTrackingTransformMode,
	MARKER_TRACKING_TRANSFORM_MODES,
	MarkerTrackingSourceMode,
	MARKER_TRACKING_SOURCE_MODES,
} from '../../../core/webXR/markerTracking/Common';
import {Poly} from '../../Poly';
import {CoreObjectType, ObjectContent} from '../../../core/geometry/ObjectContent';
import {CoreMask} from '../../../core/geometry/Mask';

interface CameraWebXRARMarkerTrackingSopParams extends DefaultOperationParams {
	group: string;
	sourceMode: number;
	sourceUrl: string;
	transformMode: number;
	smooth: boolean;
	smoothCount: number;
	barCodeType: string;
	barCodeValue: number;
}

interface UpdateObjectOptions {
	scene: PolyScene;
	objects: ObjectContent<CoreObjectType>[];
	params: CameraWebXRARMarkerTrackingSopParams;
	active: boolean;
}

export class CameraWebXRARMarkerTrackingSopOperation extends BaseSopOperation {
	static override readonly DEFAULT_PARAMS: CameraWebXRARMarkerTrackingSopParams = {
		group: '',
		sourceMode: MARKER_TRACKING_SOURCE_MODES.indexOf(MarkerTrackingSourceMode.WEBCAM),
		sourceUrl: '',
		transformMode: MARKER_TRACKING_TRANSFORM_MODES.indexOf(MarkerTrackingTransformMode.CAMERA),
		smooth: true,
		smoothCount: 5,
		barCodeType: Poly.thirdParty.markerTracking().barCodeTypes()[0] || '',
		barCodeValue: 0,
	};
	static override readonly INPUT_CLONED_STATE = InputCloneMode.FROM_NODE;
	static override type(): Readonly<CameraSopNodeType.WEBXR_AR_MARKER_TRACKING> {
		return CameraSopNodeType.WEBXR_AR_MARKER_TRACKING;
	}
	override cook(inputCoreGroups: CoreGroup[], params: CameraWebXRARMarkerTrackingSopParams) {
		const coreGroup = inputCoreGroups[0];
		const objects = CoreMask.filterObjects(coreGroup, {
			group: params.group,
		});

		if (Poly.thirdParty.markerTracking().hasController()) {
			if (this._node) {
				CameraWebXRARMarkerTrackingSopOperation.updateObject({
					scene: this._node.scene(),
					objects,
					params,
					active: true,
				});
			}
		} else {
			this._node?.states.error.set(
				'This node requires the plugin-marker-tracking. See [https://github.com/polygonjs/plugin-marker-tracking](https://github.com/polygonjs/plugin-marker-tracking)'
			);
		}

		return coreGroup;
	}
	static updateObject(options: UpdateObjectOptions) {
		const {objects, params, active} = options;

		for (let object of objects) {
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING, active);

			// source
			const sourceMode = MARKER_TRACKING_SOURCE_MODES[params.sourceMode];
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_SOURCE_MODE, sourceMode);
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_SOURCE_URL, params.sourceUrl);

			// transform
			const transformMode = MARKER_TRACKING_TRANSFORM_MODES[params.transformMode];
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_TRANSFORM_MODE, transformMode);

			// smooth
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_SMOOTH, params.smooth);
			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_SMOOTH_COUNT, params.smoothCount);

			CoreObject.addAttribute(object, CameraAttribute.WEBXR_AR_MARKER_TRACKING_BAR_CODE_TYPE, params.barCodeType);
			CoreObject.addAttribute(
				object,
				CameraAttribute.WEBXR_AR_MARKER_TRACKING_BAR_CODE_VALUE,
				params.barCodeValue
			);
		}
	}
}
