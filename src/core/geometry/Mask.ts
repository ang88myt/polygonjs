import {Object3D} from 'three';
import {ArrayUtils} from '../ArrayUtils';
import {stringMatchMask} from '../String';
import {CoreType} from '../Type';
import {CorePath} from './CorePath';
import {CoreGroup} from './Group';
import {BaseCoreObject} from './_BaseObject';
import {CoreObject} from './Object';
import {CoreObjectType, ObjectContent} from './ObjectContent';
import {coreObjectInstanceFactory} from './CoreObjectFactory';
interface GroupOptions {
	group: string;
}
interface CoreMaskFilterOptions extends GroupOptions {}
function filterObjectsFromCoreGroup<T extends CoreObjectType>(
	coreGroup: CoreGroup,
	options: CoreMaskFilterOptions,
	coreObjects?: BaseCoreObject<T>[]
): ObjectContent<CoreObjectType>[] {
	return filterCoreObjects(options.group, coreObjects || coreGroup.allCoreObjects()).map((o) => o.object());
}
export function filterCoreObjectsFromCoreGroup<T extends CoreObjectType>(
	coreGroup: CoreGroup,
	options: CoreMaskFilterOptions,
	coreObjects?: BaseCoreObject<T>[]
): BaseCoreObject<CoreObjectType>[] {
	return filterCoreObjects(options.group, coreObjects || coreGroup.allCoreObjects());
}
export function filterThreejsCoreObjectsFromCoreGroup(
	coreGroup: CoreGroup,
	options: CoreMaskFilterOptions,
	coreObjects?: CoreObject[]
): CoreObject[] {
	return filterCoreObjects(options.group, coreObjects || coreGroup.threejsCoreObjects()) as CoreObject[];
}
function isInGroup<T extends CoreObjectType>(groupString: string, coreObject: BaseCoreObject<T>) {
	const group = groupString.trim();
	if (group.length == 0) {
		return true;
	}

	if (coreObject.object.name == group) {
		return true;
	}
	if (stringMatchMask(groupString, coreObject.name())) {
		return true;
	}

	const elements = group.split('=');
	const attribNameWithPrefix = elements[0];
	if (attribNameWithPrefix[0] == '@') {
		const attribName = attribNameWithPrefix.substring(1);
		const expectedAttribValue = elements[1];
		const currentAttribValue = coreObject.attribValue(attribName);
		return expectedAttribValue == currentAttribValue;
	}
	return false;
}

function filterCoreObjects<T extends CoreObjectType>(
	groupString: string,
	coreObjects: BaseCoreObject<T>[]
): BaseCoreObject<T>[] {
	groupString = groupString.trim();

	if (groupString == '') {
		return coreObjects;
	}
	const index = parseInt(groupString);
	if (!CoreType.isNaN(index)) {
		return ArrayUtils.compact([coreObjects[index]]);
	}

	const selectedCoreObjects: Array<BaseCoreObject<T>> = [];

	for (const rootObject of coreObjects) {
		let added = false;
		const object = rootObject.object();
		const objectsInMask = CorePath.objectsByMask(groupString, object);
		for (const objectInMask of objectsInMask) {
			const parent = objectInMask.parent;
			const index = parent ? parent.children.indexOf(objectInMask) : 0;
			const coreObject = coreObjectInstanceFactory<T>(objectInMask, index);
			selectedCoreObjects.push(coreObject);
			added = true;
		}
		const isInGroup = CoreMask.isInGroup(groupString, rootObject);
		if (isInGroup && !added) {
			selectedCoreObjects.push(rootObject);
		}
	}

	return selectedCoreObjects;
}
export function filterThreejsObjects(coreGroup: CoreGroup, options: CoreMaskFilterOptions) {
	return filterObjectsFromCoreGroup(coreGroup, options, coreGroup.threejsCoreObjects()) as Object3D[];
}
export function filterObjectsWithGroup(coreGroup: CoreGroup, options: GroupOptions) {
	return filterObjectsFromCoreGroup(coreGroup, {
		group: options.group,
	});
}
export function filterThreejsObjectsWithGroup(coreGroup: CoreGroup, options: GroupOptions) {
	return filterThreejsObjects(coreGroup, {
		group: options.group,
	});
}
export class CoreMask {
	static filterObjects = filterObjectsFromCoreGroup;
	static filterCoreObjects = filterCoreObjectsFromCoreGroup;
	static filterThreejsObjects = filterThreejsObjects;
	static isInGroup = isInGroup;
}
