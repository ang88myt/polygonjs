import {CorePoint} from '../Point';
import {BufferGeometry} from 'three';
import {CoreGeometry} from '../Geometry';
import {Float32BufferAttribute} from 'three';
import {Vector3} from 'three';
import {ArrayUtils} from '../../ArrayUtils';
import {PolyDictionary} from '../../../types/GlobalTypes';

export abstract class CoreGeometryBuilderBase {
	fromPoints(points: CorePoint[]) {
		points = this._filterPoints(points);
		const geometry = new BufferGeometry();
		const core_geometry = new CoreGeometry(geometry);

		const first_point = points[0];
		if (first_point != null) {
			const oldGeometry = first_point.geometry();

			// index
			const new_index_by_old_index: PolyDictionary<number> = {};
			for (let i = 0; i < points.length; i++) {
				new_index_by_old_index[points[i].index()] = i;
			}

			const indices = this._indicesFromPoints(new_index_by_old_index, oldGeometry);
			if (indices) {
				geometry.setIndex(indices);
			}

			// attributes
			const {attributes} = oldGeometry;
			// const new_attributes = {}
			for (let attribute_name of Object.keys(attributes)) {
				const attrib_values = CoreGeometry.userDataAttribs(oldGeometry)[attribute_name];
				const is_attrib_indexed = attrib_values != null;

				if (is_attrib_indexed) {
					const new_values: string[] = ArrayUtils.uniqWithoutPreservingOrder(
						points.map((point) => point.indexedAttribValue(attribute_name))
					);
					const new_index_by_value: PolyDictionary<number> = {};
					new_values.forEach((new_value, i) => (new_index_by_value[new_value] = i));

					core_geometry.userDataAttribs()[attribute_name] = new_values;

					// const old_attrib = old_geometry.getAttribute(attribute_name)
					// const old_attrib_array = old_attrib.array
					const new_attrib_indices = [];
					for (let point of points) {
						// const old_index = old_attrib_array[point.index()]
						const new_index = new_index_by_value[point.indexedAttribValue(attribute_name)];
						new_attrib_indices.push(new_index);
					}

					geometry.setAttribute(attribute_name, new Float32BufferAttribute(new_attrib_indices, 1));
				} else {
					const attrib_size = attributes[attribute_name].itemSize;
					const values: number[] = new Array(points.length * attrib_size);
					switch (attrib_size) {
						case 1:
							for (let i = 0; i < points.length; i++) {
								values[i] = points[i].attribValue(attribute_name) as number;
							}
							break;
						default:
							let value: Vector3;
							for (let i = 0; i < points.length; i++) {
								value = points[i].attribValue(attribute_name) as Vector3;
								value.toArray(values, i * attrib_size);
							}
							break;
					}

					geometry.setAttribute(attribute_name, new Float32BufferAttribute(values, attrib_size));
				}
			}
		}
		return geometry;
	}

	protected abstract _filterPoints(points: CorePoint[]): CorePoint[];
	protected abstract _indicesFromPoints(
		new_index_by_old_index: PolyDictionary<number>,
		old_geometry: BufferGeometry
	): number[] | undefined;
}
