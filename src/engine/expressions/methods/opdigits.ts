/**
 * Returns the number at the end of a string
 *
 * @remarks
 * It takes 1 arguments.
 *
 * opdigits(<word\>)
 *
 * - **<word\>** returns the number at the end of word
 *
 * ## Usage
 *
 * - `opdigits('/geo1')` - returns 1
 * - `opdigits($OS)` - returns the number at the end of the name of the current node
 *
 */

import {BaseMethod} from './_Base';
import {BaseNodeType} from '../../nodes/_Base';
import {MethodDependency} from '../MethodDependency';
import {CoreString} from '../../../core/String';

export class OpdigitsExpression extends BaseMethod {
	protected _require_dependency = true;
	static required_arguments() {
		return [['string', 'path to node']];
	}

	find_dependency(index_or_path: number | string): MethodDependency | null {
		const graph_node = this.find_referenced_graph_node(index_or_path);
		if (graph_node) {
			const node = graph_node as BaseNodeType;
			if (node.nameController) {
				const name_node = node.nameController.graph_node;
				return this.create_dependency(name_node, index_or_path);
			}
		}
		return null;
	}

	process_arguments(args: any[]): Promise<any> {
		return new Promise((resolve, reject) => {
			if (args.length == 1) {
				const index_or_path = args[0];
				const node = this.get_referenced_node(index_or_path);
				if (node) {
					const name = node.name();
					const value = CoreString.tailDigits(name);
					resolve(value);
				} else {
					resolve(0);
				}
			} else {
				resolve(0);
			}
		});
	}
}
