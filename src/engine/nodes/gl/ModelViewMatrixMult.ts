/**
 * multiplies an input vector by the modelViewMatrix
 *
 *
 *
 */

import {TypedGlNode} from './_Base';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {GlConnectionPointType, GlConnectionPoint} from '../utils/io/connections/Gl';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';
import {ShaderName} from '../utils/shaders/ShaderName';
import {ThreeToGl} from '../../../core/ThreeToGl';

const OUTPUT_NAME = 'mvMult';

class ModelViewMatrixMultGlParamsConfig extends NodeParamsConfig {
	vector = ParamConfig.VECTOR3([0, 0, 0]);
}
const ParamsConfig = new ModelViewMatrixMultGlParamsConfig();
export class ModelViewMatrixMultGlNode extends TypedGlNode<ModelViewMatrixMultGlParamsConfig> {
	override paramsConfig = ParamsConfig;
	static override type(): Readonly<'modelViewMatrixMult'> {
		return 'modelViewMatrixMult';
	}

	override initializeNode() {
		super.initializeNode();
		this.io.outputs.setNamedOutputConnectionPoints([
			new GlConnectionPoint(OUTPUT_NAME, GlConnectionPointType.VEC4),
		]);
	}

	override setLines(linesController: ShadersCollectionController) {
		if (linesController.currentShaderName() == ShaderName.VERTEX) {
			const input = ThreeToGl.vector3(this.variableForInputParam(this.p.vector));
			const outValue = this.glVarName(OUTPUT_NAME);
			const bodyLine = `vec4 ${outValue} = modelViewMatrix * vec4(${input}, 1.0)`;
			linesController.addBodyLines(this, [bodyLine], ShaderName.VERTEX);
		}
	}
}
