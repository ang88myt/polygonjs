/**
 * sends a trigger when the viewer taps or clicks on an object
 *
 *
 */

import {TRIGGER_CONNECTION_NAME} from './_Base';
import {JsConnectionPoint, JsConnectionPointType, JS_CONNECTION_POINT_IN_NODE_DEF} from '../utils/io/connections/Js';
import {JsType} from '../../poly/registers/nodes/types/Js';
import {EvaluatorEventData} from './code/assemblers/actor/Evaluator';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';
import {BaseOnObjectPointerEventJsNode} from './_BaseOnObjectPointerEvent';
import {PointerEventType} from '../../../core/event/PointerEventType';
import {inputObject3D} from './_BaseObject3D';
import {Poly} from '../../Poly';
import {RefJsDefinition} from './utils/JsDefinition';

const CONNECTION_OPTIONS = JS_CONNECTION_POINT_IN_NODE_DEF;

export class OnObjectPointerupJsNode extends BaseOnObjectPointerEventJsNode {
	static override type() {
		return JsType.ON_OBJECT_POINTERUP;
	}

	override eventData(): EvaluatorEventData | undefined {
		return {
			type: PointerEventType.pointerup,
			emitter: this.eventEmitter(),
			jsType: JsType.ON_OBJECT_POINTERUP,
		};
	}

	override initializeNode() {
		super.initializeNode();
		this.io.outputs.setNamedOutputConnectionPoints([
			new JsConnectionPoint(TRIGGER_CONNECTION_NAME, JsConnectionPointType.TRIGGER, CONNECTION_OPTIONS),
			new JsConnectionPoint(
				JsConnectionPointType.INTERSECTION,
				JsConnectionPointType.INTERSECTION,
				CONNECTION_OPTIONS
			),
		]);
		this.io.connection_points.spare_params.setInputlessParamNames(['pointsThreshold', 'lineThreshold', 'element']);
	}

	override setLines(shadersCollectionController: ShadersCollectionController) {
		const usedOutputNames = this.io.outputs.used_output_names();
		if (usedOutputNames.includes(JsConnectionPointType.INTERSECTION)) {
			this._addIntersectionRef(shadersCollectionController);
		}
	}

	override setTriggeringLines(shadersCollectionController: ShadersCollectionController, triggeredMethods: string) {
		const object3D = inputObject3D(this, shadersCollectionController);
		const traverseChildren = this.variableForInputParam(shadersCollectionController, this.p.traverseChildren);
		const lineThreshold = this.variableForInputParam(shadersCollectionController, this.p.lineThreshold);
		const pointsThreshold = this.variableForInputParam(shadersCollectionController, this.p.pointsThreshold);
		const outIntersection = this._addIntersectionRef(shadersCollectionController);

		const func = Poly.namedFunctionsRegister.getFunction(
			'getObjectHoveredState',
			this,
			shadersCollectionController
		);
		const bodyLine = func.asString(
			object3D,
			traverseChildren,
			lineThreshold,
			pointsThreshold,
			`this.${outIntersection}`
		);

		//
		const bodyLines = [`if( ${bodyLine} ){`, `${triggeredMethods}`, `}`];

		shadersCollectionController.addTriggeringLines(this, bodyLines, {
			gatherable: true,
			triggeringMethodName: JsType.ON_POINTERUP,
		});
	}
	private _addIntersectionRef(shadersCollectionController: ShadersCollectionController) {
		const outIntersection = this.jsVarName(JsConnectionPointType.INTERSECTION);
		shadersCollectionController.addDefinitions(this, [
			new RefJsDefinition(
				this,
				shadersCollectionController,
				JsConnectionPointType.INTERSECTION,
				outIntersection,
				`null`
			),
		]);
		return outIntersection;
	}
}
