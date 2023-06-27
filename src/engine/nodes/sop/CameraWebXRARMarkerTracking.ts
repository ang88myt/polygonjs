/**
 * allows the viewer created by this camera to track markers
 *
 *
 *
 */

import {TypedSopNode} from './_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {CameraWebXRARMarkerTrackingSopOperation} from '../../operations/sop/CameraWebXRARMarkerTracking';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {CameraSopNodeType} from '../../poly/NodeContext';
import {CoreCameraMarkerTrackingParamConfig} from '../../../core/camera/webXR/CoreCameraMarkerTracking';
import {
	MarkerTrackingSourceMode,
	MARKER_TRACKING_SOURCE_MODES,
	MARKER_TRACKING_TRANSFORM_MODES,
	MarkerTrackingTransformMode,
} from '../../../core/webXR/markerTracking/Common';
import {Constructor} from '../../../types/GlobalTypes';
const DEFAULT = CameraWebXRARMarkerTrackingSopOperation.DEFAULT_PARAMS;

export function ParamsConfigBase<TBase extends Constructor>(Base: TBase) {
	return class Mixin extends Base {
		/** @param group to assign the material to */
		group = ParamConfig.STRING(DEFAULT.group, {
			objectMask: true,
		});
		/** @param sets if this node should search through the materials inside the whole hierarchy */
		applyToChildren = ParamConfig.BOOLEAN(DEFAULT.applyToChildren, {separatorAfter: true});
	};
}

class CameraWebXRARMarkerTrackingSopParamsConfig extends CoreCameraMarkerTrackingParamConfig(
	ParamsConfigBase(NodeParamsConfig)
) {}
const ParamsConfig = new CameraWebXRARMarkerTrackingSopParamsConfig();

export class CameraWebXRARMarkerTrackingSopNode extends TypedSopNode<CameraWebXRARMarkerTrackingSopParamsConfig> {
	override readonly paramsConfig = ParamsConfig;
	static override type() {
		return CameraSopNodeType.WEBXR_AR_MARKER_TRACKING;
	}

	protected override initializeNode() {
		this.io.inputs.setCount(1);
		this.io.inputs.initInputsClonedState(CameraWebXRARMarkerTrackingSopOperation.INPUT_CLONED_STATE);
	}

	private _operation: CameraWebXRARMarkerTrackingSopOperation | undefined;
	override cook(inputCoreGroups: CoreGroup[]) {
		this._operation =
			this._operation || new CameraWebXRARMarkerTrackingSopOperation(this._scene, this.states, this);
		const coreGroup = this._operation.cook(inputCoreGroups, this.pv);
		this.setCoreGroup(coreGroup);
	}

	setSourceMode(sourceMode: MarkerTrackingSourceMode) {
		this.p.sourceMode.set(MARKER_TRACKING_SOURCE_MODES.indexOf(sourceMode));
	}
	sourceMode(): MarkerTrackingSourceMode {
		return MARKER_TRACKING_SOURCE_MODES[this.pv.sourceMode];
	}
	setTransformMode(sourceMode: MarkerTrackingTransformMode) {
		this.p.transformMode.set(MARKER_TRACKING_TRANSFORM_MODES.indexOf(sourceMode));
	}
	transformMode(): MarkerTrackingTransformMode {
		return MARKER_TRACKING_TRANSFORM_MODES[this.pv.transformMode];
	}
}
