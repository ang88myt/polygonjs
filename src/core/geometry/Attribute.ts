import {
	Color,
	Vector2,
	Vector3,
	Vector4,
	BufferAttribute,
	InstancedBufferAttribute,
	InterleavedBufferAttribute,
} from 'three';
import {AttribValue, PolyDictionary} from '../../types/GlobalTypes';
import {ArrayUtils} from '../ArrayUtils';
import {stringToAttribNames, stringMatchMask} from '../String';
import {CoreType} from '../Type';
import {AttribSize} from './Constant';
import {GroupString} from './Group';

export enum Attribute {
	POINT_INDEX = 'ptnum',
	OBJECT_INDEX = 'objnum',
	COLOR = 'color',
	NORMAL = 'normal',
	POSITION = 'position',
	PSCALE = 'pscale',
	UP = 'up',
	UV = 'uv',
	SCALE = 'scale',
	TANGENT = 'tangent',
	ID = 'id',
}
export enum ObjectAttribute {
	HOVERED = 'hovered',
}

const ATTRIB_NAME_MAP: PolyDictionary<string> = {
	P: Attribute.POSITION,
	N: Attribute.NORMAL,
	Cd: Attribute.COLOR,
};

export class CoreAttribute {
	static remapName(name: string): string {
		return ATTRIB_NAME_MAP[name] || name;
	}

	static arrayToIndexedArrays(array: string[]) {
		const index_by_value: PolyDictionary<number> = {};
		let current_index = 0;
		const indices = [];
		const values = [];

		let i = 0;
		while (i < array.length) {
			//(value = array[i++])?
			const value = array[i];
			const index = index_by_value[value];
			if (index != null) {
				indices.push(index);
			} else {
				values.push(value);
				indices.push(current_index);
				index_by_value[value] = current_index;
				current_index += 1;
			}

			i++;
		}

		return {
			indices,
			values,
		};
	}

	static defaultValue(size: number) {
		switch (size) {
			case 1:
				return 0;
			case 2:
				return new Vector2(0, 0);
			case 3:
				return new Vector3(0, 0, 0);
			default:
				throw `size ${size} not yet implemented`;
		}
	}

	static copy(src: BufferAttribute, dest: BufferAttribute, mark_as_needs_update = true) {
		const src_array = src?.array as number[] | undefined;
		const dest_array = dest?.array as number[] | undefined;
		if (src_array && dest_array) {
			const min_length = Math.min(src_array.length, dest_array.length);
			for (let i = 0; i < min_length; i++) {
				dest_array[i] = src_array[i];
			}

			if (mark_as_needs_update) {
				dest.needsUpdate = true;
			}
		}
	}

	static attribSizeFromValue(val: AttribValue): number | null {
		if (CoreType.isString(val) || CoreType.isNumber(val)) {
			return AttribSize.FLOAT;
		}
		if (CoreType.isArray(val)) {
			return val.length;
		}

		switch (val.constructor) {
			case Color:
				return AttribSize.VECTOR3;
			case Vector2:
				return AttribSize.VECTOR2;
			case Vector3:
				return AttribSize.VECTOR3;
			case Vector4:
				return AttribSize.VECTOR4;
		}
		return 0;
	}
	static attribNamesMatchingMask(masksString: GroupString, existingAttribNames: string[]) {
		const masks = stringToAttribNames(masksString);

		const matchingAttribNames: string[] = [];
		for (const mask of masks) {
			for (const attribName of existingAttribNames) {
				if (stringMatchMask(attribName, mask)) {
					matchingAttribNames.push(attribName);
				} else {
					const remapped = CoreAttribute.remapName(mask);
					if (attribName == remapped) {
						matchingAttribNames.push(attribName);
					}
				}
			}
		}

		return ArrayUtils.uniq(matchingAttribNames);
	}
}

export function markAttributeAsNeedsUpdateForFrame(
	attribute: BufferAttribute | InstancedBufferAttribute | InterleavedBufferAttribute,
	frame: number
) {
	if (attribute instanceof BufferAttribute || attribute instanceof InstancedBufferAttribute) {
		(attribute as BufferAttribute | InstancedBufferAttribute).version = frame;
	} else {
		if (attribute.data) {
			attribute.data.version = frame;
		}
	}
}
