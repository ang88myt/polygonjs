/**
 * Returns the number of points in a geometry.
 *
 * @remarks
 * It takes 1 arguments.
 *
 * pointsCount(<input_index_or_node_path\>)
 *
 * - **<input_index_or_node_path\>** returns the number of points, as a number
 *
 * ## Usage
 *
 * - `pointsCount(0)` - returns the number of points in the input node.
 * - `pointsCount('/geo/merge1')` - returns the number of points in the node /geo/merge1
 *
 */
import {BaseMethod} from './_Base';
import {MethodDependency} from '../MethodDependency';
import {GeometryContainer} from '../../containers/Geometry';
// import {CoreGroup} from '../../../core/Geometry/Group';

export class PointsCountExpression extends BaseMethod {
	protected _require_dependency = true;
	// npoints(0)
	// npoints('../REF_bbox')
	static requiredArguments() {
		return [['string', 'path to node']];
	}

	findDependency(index_or_path: number | string): MethodDependency | null {
		return this.createDependencyFromIndexOrPath(index_or_path);
	}

	processArguments(args: any[]): Promise<any> {
		return new Promise(async (resolve, reject) => {
			if (args.length == 1) {
				const index_or_path = args[0];
				let container: GeometryContainer;
				try {
					container = (await this.getReferencedNodeContainer(index_or_path)) as GeometryContainer;
				} catch (e) {
					reject(e);
					return;
				}

				if (container) {
					const value = container.pointsCount();
					resolve(value);
				}
			} else {
				resolve(0);
			}
		});
	}
}
