/**
 * Update the material color
 *
 *
 */

import {ActorNodeTriggerContext, TRIGGER_CONNECTION_NAME, TypedActorNode} from './_Base';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {Color} from 'three/src/math/Color';
import {CoreType} from '../../../core/Type';
import {
	ActorConnectionPoint,
	ActorConnectionPointType,
	ACTOR_CONNECTION_POINT_IN_NODE_DEF,
} from '../utils/io/connections/Actor';
import {ParamType} from '../../poly/ParamType';
import {Mesh} from 'three/src/objects/Mesh';
import {Material} from 'three/src/materials/Material';
import {MeshBasicMaterial} from 'three';

const CONNECTION_OPTIONS = ACTOR_CONNECTION_POINT_IN_NODE_DEF;

class SetMaterialColorActorParamsConfig extends NodeParamsConfig {
	/** @param color */
	color = ParamConfig.COLOR([1, 1, 1]);
	/** @param lerp factor */
	lerp = ParamConfig.FLOAT(1);
}
const ParamsConfig = new SetMaterialColorActorParamsConfig();

export class SetMaterialColorActorNode extends TypedActorNode<SetMaterialColorActorParamsConfig> {
	override readonly paramsConfig = ParamsConfig;
	static override type() {
		return 'setMaterialColor';
	}

	override initializeNode() {
		this.io.inputs.setNamedInputConnectionPoints([
			new ActorConnectionPoint(TRIGGER_CONNECTION_NAME, ActorConnectionPointType.TRIGGER, CONNECTION_OPTIONS),
			new ActorConnectionPoint(
				ActorConnectionPointType.OBJECT_3D,
				ActorConnectionPointType.OBJECT_3D,
				CONNECTION_OPTIONS
			),
		]);

		this.io.outputs.setNamedOutputConnectionPoints([
			new ActorConnectionPoint(TRIGGER_CONNECTION_NAME, ActorConnectionPointType.TRIGGER),
		]);
	}

	public override receiveTrigger(context: ActorNodeTriggerContext) {
		const {Object3D} = context;
		const color = this._inputValueFromParam<ParamType.COLOR>(this.p.color, context);
		const lerp = this._inputValueFromParam<ParamType.FLOAT>(this.p.lerp, context);

		const material = (Object3D as Mesh).material;
		if (CoreType.isArray(material)) {
			for (let mat of material) {
				this._updateMaterial(mat, color, lerp);
			}
		} else {
			this._updateMaterial(material, color, lerp);
		}

		this.runTrigger(context);
	}
	private _updateMaterial(material: Material, targetColor: Color, lerp: number) {
		const color = (material as MeshBasicMaterial).color;
		if (!color) {
			return;
		}
		if (lerp >= 1) {
			color.copy(targetColor);
		} else {
			color.lerp(targetColor, lerp);
		}
	}
}
