import {BaseSopOperation} from './_Base';
import {CoreGroup} from '../../../core/geometry/Group';
import {Vector3, Box3} from 'three';
import {CoreTransform} from '../../../core/Transform';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import {InputCloneMode} from '../../../engine/poly/InputCloneMode';
import {DefaultOperationParams} from '../../../core/operations/_Base';
const tmpBox = new Box3();
const tmpSize = new Vector3();
const tmpCenter = new Vector3();
interface RoundedBoxSopParams extends DefaultOperationParams {
	size: number;
	sizes: Vector3;
	divisions: number;
	bevel: number;
	center: Vector3;
}

export class RoundedBoxSopOperation extends BaseSopOperation {
	static override readonly DEFAULT_PARAMS: RoundedBoxSopParams = {
		size: 1,
		sizes: new Vector3(1, 1, 1),
		divisions: 2,
		bevel: 0.1,
		center: new Vector3(0, 0, 0),
	};
	static override readonly INPUT_CLONED_STATE = InputCloneMode.NEVER;
	static override type(): Readonly<'roundedBox'> {
		return 'roundedBox';
	}
	private _core_transform = new CoreTransform();
	override cook(input_contents: CoreGroup[], params: RoundedBoxSopParams) {
		const input_core_group = input_contents[0];
		const geometry = input_core_group
			? this._cook_with_input(input_core_group, params)
			: this._cook_without_input(params);

		return this.createCoreGroupFromGeometry(geometry);
	}
	private _cook_without_input(params: RoundedBoxSopParams) {
		const {sizes, size} = params;
		const geometry = new RoundedBoxGeometry(
			sizes.x * size,
			sizes.y * size,
			sizes.z * size,
			params.divisions,
			params.bevel
		);
		geometry.translate(params.center.x, params.center.y, params.center.z);
		geometry.computeVertexNormals();
		return geometry;
	}

	private _cook_with_input(coreGroup: CoreGroup, params: RoundedBoxSopParams) {
		coreGroup.boundingBox(tmpBox);
		tmpBox.getSize(tmpSize);
		tmpBox.getCenter(tmpCenter);

		const geometry = new RoundedBoxGeometry(tmpSize.x, tmpSize.y, tmpSize.z, params.divisions, params.bevel);
		const matrix = this._core_transform.translationMatrix(tmpCenter);
		geometry.applyMatrix4(matrix);
		return geometry;
	}
}
