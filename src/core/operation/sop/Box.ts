import {BaseSopOperation} from './_Base';
import {DefaultOperationParams} from '../_Base';
import {CoreGroup} from '../../geometry/Group';
import {Vector3} from 'three/src/math/Vector3';
import {CoreTransform} from '../../Transform';
import {BoxBufferGeometry} from 'three/src/geometries/BoxGeometry';
import {TypedSopNode} from '../../../engine/nodes/sop/_Base';
import {ObjectType} from '../../geometry/Constant';

interface BoxSopParams extends DefaultOperationParams {
	size: number;
	divisions: number;
	center: Vector3;
}

export class BoxSopOperation extends BaseSopOperation {
	static readonly DEFAULT_PARAMS: BoxSopParams = {
		size: 1,
		divisions: 1,
		center: new Vector3(0, 0, 0),
	};
	static type(): Readonly<'box'> {
		return 'box';
	}
	private _core_transform = new CoreTransform();
	cook(input_contents: CoreGroup[], params: BoxSopParams) {
		const input_core_group = input_contents[0];
		const geometry = input_core_group
			? this._cook_with_input(input_core_group, params)
			: this._cook_without_input(params);
		const object = TypedSopNode.create_object(geometry, ObjectType.MESH);
		const core_group = new CoreGroup();
		core_group.set_objects([object]);
		return core_group;
	}
	private _cook_without_input(params: BoxSopParams) {
		const divisions = params.divisions;
		const size = params.size;
		const geometry = new BoxBufferGeometry(size, size, size, divisions, divisions, divisions);
		geometry.translate(params.center.x, params.center.y, params.center.z);
		geometry.computeVertexNormals();
		return geometry;
	}

	private _cook_with_input(core_group: CoreGroup, params: BoxSopParams) {
		const divisions = params.divisions;

		const bbox = core_group.bounding_box();
		const size = bbox.max.clone().sub(bbox.min);
		const center = bbox.max.clone().add(bbox.min).multiplyScalar(0.5);

		const geometry = new BoxBufferGeometry(size.x, size.y, size.z, divisions, divisions, divisions);
		const matrix = this._core_transform.translation_matrix(center);
		geometry.applyMatrix4(matrix);
		return geometry;
	}
}
