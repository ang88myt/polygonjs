import {BaseCoreObject} from './_BaseObject';
import {CoreObject} from './Object';
import {CoreObjectType, isObject3D, ObjectContent} from './ObjectContent';
import {Object3D} from 'three';

type BaseCoreObjectInstance = BaseCoreObject<CoreObjectType>;
// type BaseCoreObjectClass = typeof BaseCoreObject<CoreObjectType>;
class BaseCoreObjectClass extends BaseCoreObject<CoreObjectType> {}
type BaseCoreObjectClassClass = typeof BaseCoreObjectClass;

export type CoreObjectClassFactoryCheckFunction = (
	object: ObjectContent<CoreObjectType>
) => BaseCoreObjectClassClass | undefined;
export type CoreObjectInstanceFactoryCheckFunction = (
	object: ObjectContent<CoreObjectType>,
	index: number
) => BaseCoreObjectInstance | undefined;
export type CoreObjectFactoryCheckFunctions = {
	class: CoreObjectClassFactoryCheckFunction;
	instance: CoreObjectInstanceFactoryCheckFunction;
};
const isObject3DClassFactoryCheck: CoreObjectClassFactoryCheckFunction = (object: ObjectContent<CoreObjectType>) => {
	if (isObject3D(object)) {
		return CoreObject;
	}
};
const isObject3DInstanceFactoryCheck: CoreObjectInstanceFactoryCheckFunction = (
	object: ObjectContent<CoreObjectType>,
	index = 0
) => {
	if (isObject3D(object)) {
		return new CoreObject(object, index);
	}
};
const isObject3DFactoryCheck: CoreObjectFactoryCheckFunctions = {
	class: isObject3DClassFactoryCheck,
	instance: isObject3DInstanceFactoryCheck,
};
const coreObjectCheckFunctions: CoreObjectFactoryCheckFunctions[] = [isObject3DFactoryCheck];

export function registerCoreObjectCheckFunctions(checkFunctions: CoreObjectFactoryCheckFunctions) {
	coreObjectCheckFunctions.push(checkFunctions);
}

export function coreObjectFactory(object: ObjectContent<CoreObjectType>): BaseCoreObjectClassClass {
	for (let checkFunction of coreObjectCheckFunctions) {
		const result = checkFunction.class(object);
		if (result) {
			return result;
		}
	}
	//
	return CoreObject;
}

export function coreObjectInstanceFactory<T extends CoreObjectType>(
	object: ObjectContent<T>,
	index = 0
): BaseCoreObject<T> {
	for (let checkFunction of coreObjectCheckFunctions) {
		const result = checkFunction.instance(object, index);
		if (result) {
			return result as BaseCoreObject<T>;
		}
	}
	//
	return new CoreObject(object as Object3D, index) as any as BaseCoreObject<T>;

	// TODO: make this driven by the modules register
	// if (isObject3D(object)) {
	// 	return new CoreObject(object, index);
	// } else {
	// 	return new CadCoreObject(object as CadObject<CadGeometryType>, index);
	// }
}
