import {TypedGlNode} from './_Base';
import {ParamType} from '../../poly/ParamType';
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {ConnectionPointType} from '../utils/connections/ConnectionPointType';
import {TypedNamedConnectionPoint} from '../utils/connections/NamedConnectionPoint';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';

class VecToParamsConfig extends NodeParamsConfig {}
const ParamsConfig = new VecToParamsConfig();
class BaseVecToGlNode extends TypedGlNode<VecToParamsConfig> {
	params_config = ParamsConfig;
}

interface VecToGlOptions {
	components: string[];
	param_type: ParamType;
}

function VecToGlFactory(type: string, options: VecToGlOptions) {
	const components = options.components;
	const param_type = options.param_type;
	return class VecToGlNode extends BaseVecToGlNode {
		static type() {
			return type;
		}

		initialize_node() {
			this.io.outputs.set_named_output_connection_points(
				components.map((c) => {
					return new TypedNamedConnectionPoint(c, ConnectionPointType.FLOAT);
				})
			);
		}
		create_params() {
			this.add_param(param_type, 'vec', components.map((c) => 0) as Number2);
		}

		set_lines(shaders_collection_controller: ShadersCollectionController) {
			const body_lines: string[] = [];

			const vec = this.variable_for_input('vec');

			this.io.outputs.used_output_names().forEach((c) => {
				const var_name = this.gl_var_name(c);
				body_lines.push(`float ${var_name} = ${vec}.${c}`);
			});
			shaders_collection_controller.add_body_lines(this, body_lines);
		}
	};
}

const components_v4 = ['x', 'y', 'z', 'w'];

export class Vec2ToFloatGlNode extends VecToGlFactory('vec2_to_float', {
	components: ['x', 'y'],
	param_type: ParamType.VECTOR2,
}) {}
export class Vec3ToFloatGlNode extends VecToGlFactory('vec3_to_float', {
	components: ['x', 'y', 'z'],
	param_type: ParamType.VECTOR3,
}) {}
export class Vec4ToFloatGlNode extends VecToGlFactory('vec4_to_float', {
	components: components_v4,
	param_type: ParamType.VECTOR4,
}) {}

export class Vec4ToVectorGlNode extends BaseVecToGlNode {
	static type() {
		return 'vec4_to_vector';
	}

	initialize_node() {
		this.io.outputs.set_named_output_connection_points([
			new TypedNamedConnectionPoint('vec', ConnectionPointType.VEC3),
			new TypedNamedConnectionPoint('w', ConnectionPointType.FLOAT),
		]);
	}
	create_params() {
		this.add_param(ParamType.VECTOR4, 'vec', components_v4.map((c) => 0) as Number4);
	}

	set_lines(shaders_collection_controller: ShadersCollectionController) {
		const body_lines = [];

		const vec = this.variable_for_input('vec');

		const used_output_names = this.io.outputs.used_output_names();

		if (used_output_names.indexOf('vec') >= 0) {
			const var_name = this.gl_var_name('vec');
			body_lines.push(`vec3 ${var_name} = ${vec}.xyz`);
		}
		if (used_output_names.indexOf('w') >= 0) {
			const var_name = this.gl_var_name('w');
			body_lines.push(`float ${var_name} = ${vec}.w`);
		}
		shaders_collection_controller.add_body_lines(this, body_lines);
	}
}
