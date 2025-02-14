import {Float32BufferAttribute} from 'three';
import {BufferGeometry} from 'three';
import {stringMatchesOneMask, stringToAttribNames} from '../../String';
import {CoreGeometry} from '../../geometry/Geometry';
import {AttribType} from '../../geometry/Constant';
import {CoreAttributeData} from '../../geometry/AttributeData';
import {CoreAttribute} from '../../geometry/Attribute';
import {CoreType} from '../../Type';
import {PolyDictionary, StringOrNumber} from '../../../types/GlobalTypes';

const DEEP_ATTRIB_SEPARATOR = ':';

export interface JsonDataLoaderOptions {
	dataKeysPrefix?: string;
	skipEntries?: string;
	doConvert?: boolean;
	convertToNumeric?: string;
}

export class JSONDataParser {
	private _json: any[] | undefined;
	private _attribute_datas_by_name: PolyDictionary<CoreAttributeData> = {};
	private _options: JsonDataLoaderOptions = {};

	constructor(options: JsonDataLoaderOptions = {}) {
		this._options.dataKeysPrefix = options.dataKeysPrefix;
		this._options.skipEntries = options.skipEntries;
		this._options.doConvert = options.doConvert || false;
		this._options.convertToNumeric = options.convertToNumeric;
	}

	dataKeysPrefix() {
		return this._options.dataKeysPrefix;
	}

	get_prefixed_json(json: any, prefixes: string[]): any[] {
		if (prefixes.length == 0) {
			return json;
		} else {
			const first_prefix = prefixes.shift();
			if (first_prefix) {
				return this.get_prefixed_json(json[first_prefix], prefixes);
			}
		}
		return [];
	}

	setJSON(json: any) {
		return (this._json = json);
	}

	createObject() {
		const geometry = new BufferGeometry();
		const core_geo = new CoreGeometry(geometry);

		if (this._json != null) {
			const points_count = this._json.length;
			core_geo.initPositionAttribute(points_count);

			this._find_attributes();

			const convert_to_numeric_masks = stringToAttribNames(this._options.convertToNumeric || '');

			// set values
			for (let attrib_name of Object.keys(this._attribute_datas_by_name)) {
				const geo_attrib_name = CoreAttribute.remapName(attrib_name);
				let attrib_values = this._attribute_values_for_name(attrib_name).flat();

				const data = this._attribute_datas_by_name[attrib_name];
				const size = data.size();

				if (data.type() === AttribType.STRING) {
					if (this._options.doConvert && stringMatchesOneMask(attrib_name, convert_to_numeric_masks)) {
						const numerical_attrib_values: number[] = attrib_values.map((v) => {
							if (CoreType.isString(v)) {
								return parseFloat(v) || 0;
							} else {
								return v;
							}
						});
						geometry.setAttribute(
							geo_attrib_name,
							new Float32BufferAttribute(numerical_attrib_values, size)
						);
					} else {
						const index_data = CoreAttribute.arrayToIndexedArrays(attrib_values as string[]);
						core_geo.setIndexedAttribute(geo_attrib_name, index_data['values'], index_data['indices']);
					}
				} else {
					const numerical_attrib_values = attrib_values as number[];
					geometry.setAttribute(geo_attrib_name, new Float32BufferAttribute(numerical_attrib_values, size));
				}
			}
		}
		return geometry;
	}

	private _find_attributes() {
		let first_pt;

		const masks = stringToAttribNames(this._options.skipEntries || '');

		if (this._json) {
			if ((first_pt = this._json[0]) != null) {
				for (let attrib_name of Object.keys(first_pt)) {
					const attrib_value = first_pt[attrib_name];

					if (this._value_has_subentries(attrib_value)) {
						for (let key of Object.keys(attrib_value)) {
							const deep_attrib_name = [attrib_name, key].join(DEEP_ATTRIB_SEPARATOR);
							const deep_attrib_value = attrib_value[attrib_name];

							if (!stringMatchesOneMask(deep_attrib_name, masks)) {
								this._attribute_datas_by_name[deep_attrib_name] =
									CoreAttributeData.from_value(deep_attrib_value);
							}
						}
					} else {
						if (!stringMatchesOneMask(attrib_name, masks)) {
							this._attribute_datas_by_name[attrib_name] = CoreAttributeData.from_value(attrib_value);
						}
					}
				}
			}
		}
	}

	private _attribute_values_for_name(attrib_name: string): StringOrNumber[] {
		if (this._json) {
			return this._json.map((json_element: PolyDictionary<any>) => {
				const prefix = attrib_name.split(DEEP_ATTRIB_SEPARATOR)[0];
				const value = json_element[prefix];
				if (this._value_has_subentries(value)) {
					const deep_attrib_name = attrib_name.substring(prefix.length + 1);
					return value[deep_attrib_name] || 0;
				} else {
					return value || 0;
				}
			});
		} else {
			return [];
		}
	}

	_value_has_subentries(value: any): boolean {
		return CoreType.isObject(value) && !CoreType.isArray(value);
	}
}
