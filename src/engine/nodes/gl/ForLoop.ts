/**
 * creates a for loop, executing the nodes inside it on each loop
 *
 *
 *
 */

import {TypedSubnetGlNode, TypedSubnetGlParamsConfigMixin} from './Subnet';
// import {GlConnectionPointType} from '../utils/io/connections/Gl';
import {NodeParamsConfig, ParamConfig} from '../utils/params/ParamsConfig';
import {ShadersCollectionController} from './code/utils/ShadersCollectionController';
import {ThreeToGl} from '../../../core/ThreeToGl';
import {SubnetInputGlNode} from './SubnetInput';
import {PolyDictionary} from '../../../types/GlobalTypes';
// import {ArrayUtils} from '../../../core/ArrayUtils';

enum ForLoopInput {
	START_INDEX = 'i',
	MAX = 'max',
	STEP = 'step',
}
const DEFAULT_VALUES: PolyDictionary<number> = {
	[ForLoopInput.START_INDEX]: 0,
	[ForLoopInput.MAX]: 10,
	[ForLoopInput.STEP]: 1,
};
const OFFSET = 0;

class ForLoopGlParamsConfig extends TypedSubnetGlParamsConfigMixin(NodeParamsConfig) {
	start = ParamConfig.FLOAT(0);
	max = ParamConfig.FLOAT(10, {
		range: [0, 100],
		rangeLocked: [false, false],
	});
	step = ParamConfig.FLOAT(1, {
		separatorAfter: true,
	});
}
const ParamsConfig = new ForLoopGlParamsConfig();

export class ForLoopGlNode extends TypedSubnetGlNode<ForLoopGlParamsConfig> {
	override paramsConfig = ParamsConfig;
	static override type() {
		return 'forLoop';
	}

	override paramDefaultValue(name: string) {
		return DEFAULT_VALUES[name];
	}

	// protected override _expectedInputsCount() {
	// 	const current_connections = this.io.connections.inputConnections();
	// 	return current_connections ? ArrayUtils.compact(current_connections).length + 1 : 1;
	// }

	// protected override _expectedInputTypes(): GlConnectionPointType[] {
	// 	const types: GlConnectionPointType[] = [
	// 		// GlConnectionPointType.FLOAT,
	// 		// GlConnectionPointType.FLOAT,
	// 		// GlConnectionPointType.FLOAT,
	// 	];

	// 	const default_type = GlConnectionPointType.FLOAT;
	// 	const current_connections = this.io.connections.inputConnections();

	// 	const expected_count = this._expectedInputsCount();
	// 	for (let i = OFFSET; i < expected_count; i++) {
	// 		if (current_connections) {
	// 			const connection = current_connections[i];
	// 			if (connection) {
	// 				const type = connection.src_connection_point().type();
	// 				types.push(type);
	// 			} else {
	// 				types.push(default_type);
	// 			}
	// 		} else {
	// 			types.push(default_type);
	// 		}
	// 	}
	// 	return types;
	// }

	// protected override _expectedOutputTypes() {
	// 	const types: GlConnectionPointType[] = [];
	// 	const input_types = this._expectedInputTypes();
	// 	for (let i = OFFSET; i < input_types.length; i++) {
	// 		types.push(input_types[i]);
	// 	}
	// 	return types;
	// }
	// protected override _expectedInputName(index: number) {
	// 	// switch (index) {
	// 	// 	case 0:
	// 	// 		return ForLoopInput.START_INDEX;
	// 	// 	case 1:
	// 	// 		return ForLoopInput.MAX;
	// 	// 	case 2:
	// 	// 		return ForLoopInput.STEP;
	// 	// 	default: {
	// 	const connection = this.io.connections.inputConnection(index);
	// 	if (connection) {
	// 		const name = connection.src_connection_point().name();
	// 		return name;
	// 	} else {
	// 		return `in${index}`;
	// 	}
	// 	// }
	// 	// }
	// }
	// protected override _expectedOutputName(index: number) {
	// 	return this._expectedInputName(index + OFFSET);
	// }

	//
	//
	// set_lines
	//
	//
	override set_lines_block_start(
		shaders_collection_controller: ShadersCollectionController,
		child_node: SubnetInputGlNode
	) {
		const body_lines: string[] = [];
		const connection_points = this.io.inputs.namedInputConnectionPoints();
		for (let i = OFFSET; i < connection_points.length; i++) {
			const connection_point = connection_points[i];
			const gl_type = connection_point.type();
			const out = this.glVarName(connection_point.name());
			const in_value = ThreeToGl.any(this.variableForInput(connection_point.name()));
			const body_line = `${gl_type} ${out} = ${in_value}`;
			body_lines.push(body_line);
		}
		const connections = this.io.connections.inputConnections();
		if (connections) {
			for (let connection of connections) {
				if (connection) {
					if (connection.input_index >= OFFSET) {
						const connection_point = connection.dest_connection_point();
						const in_value = ThreeToGl.any(this.variableForInput(connection_point.name()));
						const gl_type = connection_point.type();
						const out = this.glVarName(connection_point.name());
						const body_line = `${gl_type} ${out} = ${in_value}`;
						body_lines.push(body_line);
					}
				}
			}
		}

		const start: number = this.pv.start;
		const max: number = this.pv.max;
		const step: number = this.pv.step;
		const start_str = ThreeToGl.float(start);
		const max_str = ThreeToGl.float(max);
		const step_str = ThreeToGl.float(step);
		const iterator_name = this.glVarName('i');
		const open_for_loop_line = `for(float ${iterator_name} = ${start_str}; ${iterator_name} < ${max_str}; ${iterator_name}+= ${step_str}){`;
		body_lines.push(open_for_loop_line);

		// i
		const out = child_node.glVarName(ForLoopInput.START_INDEX);
		const body_line = `	float ${out} = ${iterator_name}`;
		body_lines.push(body_line);

		if (connections) {
			for (let connection of connections) {
				if (connection) {
					if (connection.input_index >= OFFSET) {
						const connection_point = connection.dest_connection_point();
						const in_value = this.glVarName(connection_point.name());
						const gl_type = connection_point.type();
						const out = child_node.glVarName(connection_point.name());
						const body_line = `	${gl_type} ${out} = ${in_value}`;
						body_lines.push(body_line);
					}
				}
			}
		}
		shaders_collection_controller.addBodyLines(child_node, body_lines);
	}

	override setLines(shaders_collection_controller: ShadersCollectionController) {}
}
