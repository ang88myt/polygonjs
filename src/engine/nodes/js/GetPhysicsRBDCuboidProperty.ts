/**
 * get an RBD cuboid property
 *
 *
 */

import {ParamlessTypedJsNode} from './_Base';
import {JsConnectionPoint, JsConnectionPointType, JS_CONNECTION_POINT_IN_NODE_DEF} from '../utils/io/connections/Js';
import {RBDCuboidProperty} from '../../../core/physics/shapes/RBDCuboid';
import {Vector3} from 'three';
import {inputObject3D} from './_BaseObject3D';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';
import {Poly} from '../../Poly';

const CONNECTION_OPTIONS = JS_CONNECTION_POINT_IN_NODE_DEF;

export class GetPhysicsRBDCuboidPropertyJsNode extends ParamlessTypedJsNode {
	static override type() {
		return 'getPhysicsRBDCuboidproperty';
	}

	override initializeNode() {
		this.io.inputs.setNamedInputConnectionPoints([
			new JsConnectionPoint(JsConnectionPointType.OBJECT_3D, JsConnectionPointType.OBJECT_3D, CONNECTION_OPTIONS),
		]);

		this.io.outputs.setNamedOutputConnectionPoints([
			new JsConnectionPoint(RBDCuboidProperty.SIZES, JsConnectionPointType.VECTOR3),
		]);
	}
	override setLines(shadersCollectionController: ShadersCollectionController) {
		const usedOutputNames = this.io.outputs.used_output_names();
		const object3D = inputObject3D(this, shadersCollectionController);

		const _f = (
			propertyName: RBDCuboidProperty,
			functionName: 'getPhysicsRBDCuboidSizes',
			type: JsConnectionPointType
		) => {
			if (!usedOutputNames.includes(propertyName)) {
				return;
			}
			const func = Poly.namedFunctionsRegister.getFunction(functionName, this, shadersCollectionController);

			const out = this.jsVarName(propertyName);
			shadersCollectionController.addVariable(this, out, new Vector3());
			shadersCollectionController.addBodyOrComputed(this, [
				{
					dataType: type,
					varName: this.jsVarName(propertyName),
					value: func.asString(object3D, out),
				},
			]);
		};

		_f(RBDCuboidProperty.SIZES, 'getPhysicsRBDCuboidSizes', JsConnectionPointType.FLOAT);
	}
}
