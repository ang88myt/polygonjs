// //
// //
// // Data types
// //
// //
// import {ParamInitValuesTypeMap} from '../../../../params/types/ParamInitValuesTypeMap';
// import {ParamType} from '../../../../poly/ParamType';
// import {BaseConnectionPoint} from './_Base';
// import {
// 	Camera,
// 	CatmullRomCurve3,
// 	Intersection,
// 	Matrix4,
// 	Object3D,
// 	Quaternion,
// 	Color,
// 	Vector2,
// 	Vector3,
// 	Vector4,
// 	Material,
// 	AnimationAction,
// 	AnimationMixer,
// 	Plane,
// 	Ray,
// 	Box3,
// 	Sphere,
// 	Texture,
// } from 'three';
// import {CoreType} from '../../../../../core/Type';

// export enum ActorConnectionPointType {
// 	ANIMATION_MIXER = 'AnimationMixer',
// 	ANIMATION_ACTION = 'AnimationAction',
// 	BOOLEAN = 'boolean',
// 	BOOLEAN_ARRAY = 'boolean[]',
// 	BOX3 = 'Box3',
// 	CAMERA = 'Camera',
// 	CATMULL_ROM_CURVE3 = 'CatmullRomCurve3',
// 	COLOR = 'Color',
// 	COLOR_ARRAY = 'Color[]',
// 	// FACE = 'face',
// 	// FACE_ARRAY = 'face[]',
// 	FLOAT = 'float',
// 	FLOAT_ARRAY = 'float[]',
// 	INTEGER = 'integer',
// 	INTEGER_ARRAY = 'integer[]',
// 	INTERSECTION = 'Intersection',
// 	INTERSECTION_ARRAY = 'Intersection[]',
// 	MATERIAL = 'Material',
// 	MATRIX4 = 'Matrix4',
// 	MATRIX4_ARRAY = 'Matrix4[]',
// 	OBJECT_3D = 'Object3D',
// 	PLANE = 'Plane',
// 	QUATERNION = 'Quaternion',
// 	QUATERNION_ARRAY = 'Quaternion[]',
// 	RAY = 'Ray',
// 	SPHERE = 'Sphere',
// 	STRING = 'string',
// 	STRING_ARRAY = 'string[]',
// 	TEXTURE = 'Texture',
// 	TEXTURE_ARRAY = 'Texture[]',
// 	// TRACKING_RESULT_HAND = 'TrackingResultHand',
// 	TRIGGER = 'trigger',
// 	VECTOR2 = 'Vector2',
// 	VECTOR2_ARRAY = 'Vector2[]',
// 	VECTOR3 = 'Vector3',
// 	VECTOR3_ARRAY = 'Vector3[]',
// 	VECTOR4 = 'Vector4',
// 	VECTOR4_ARRAY = 'Vector4[]',
// }

// const PRIMITIVE_ACTOR_CONNECTION_TYPES = [
// 	ActorConnectionPointType.BOOLEAN,
// 	ActorConnectionPointType.FLOAT,
// 	ActorConnectionPointType.INTEGER,
// 	ActorConnectionPointType.STRING,
// ];
// export function isActorConnectionPointPrimitive(type: ActorConnectionPointType) {
// 	return PRIMITIVE_ACTOR_CONNECTION_TYPES.includes(type);
// }

// //
// //
// // ALL Actor Data types in an array
// //
// //
// export const ACTOR_CONNECTION_POINT_TYPES: Array<ActorConnectionPointType> = [
// 	ActorConnectionPointType.ANIMATION_MIXER,
// 	ActorConnectionPointType.ANIMATION_ACTION,
// 	ActorConnectionPointType.BOOLEAN,
// 	ActorConnectionPointType.BOOLEAN_ARRAY,
// 	ActorConnectionPointType.BOX3,
// 	ActorConnectionPointType.CAMERA,
// 	ActorConnectionPointType.CATMULL_ROM_CURVE3,
// 	ActorConnectionPointType.COLOR,
// 	ActorConnectionPointType.COLOR_ARRAY,
// 	// ActorConnectionPointType.FACE,
// 	// ActorConnectionPointType.FACE_ARRAY,
// 	ActorConnectionPointType.FLOAT,
// 	ActorConnectionPointType.FLOAT_ARRAY,
// 	ActorConnectionPointType.INTEGER,
// 	ActorConnectionPointType.INTEGER_ARRAY,
// 	ActorConnectionPointType.INTERSECTION,
// 	ActorConnectionPointType.INTERSECTION_ARRAY,
// 	ActorConnectionPointType.MATERIAL,
// 	ActorConnectionPointType.MATRIX4,
// 	ActorConnectionPointType.MATRIX4_ARRAY,
// 	ActorConnectionPointType.OBJECT_3D,
// 	ActorConnectionPointType.PLANE,
// 	ActorConnectionPointType.QUATERNION,
// 	ActorConnectionPointType.QUATERNION_ARRAY,
// 	ActorConnectionPointType.RAY,
// 	ActorConnectionPointType.SPHERE,
// 	ActorConnectionPointType.STRING,
// 	ActorConnectionPointType.STRING_ARRAY,
// 	ActorConnectionPointType.TEXTURE,
// 	ActorConnectionPointType.TEXTURE_ARRAY,
// 	// ActorConnectionPointType.TRACKING_RESULT_HAND,
// 	ActorConnectionPointType.TRIGGER,
// 	ActorConnectionPointType.VECTOR2,
// 	ActorConnectionPointType.VECTOR2_ARRAY,
// 	ActorConnectionPointType.VECTOR3,
// 	ActorConnectionPointType.VECTOR3_ARRAY,
// 	ActorConnectionPointType.VECTOR4,
// 	ActorConnectionPointType.VECTOR4_ARRAY,
// ];
// export const PARAM_CONVERTIBLE_ACTOR_CONNECTION_POINT_TYPES: Array<ActorConnectionPointType> = [
// 	ActorConnectionPointType.BOOLEAN,
// 	ActorConnectionPointType.COLOR,
// 	ActorConnectionPointType.FLOAT,
// 	ActorConnectionPointType.INTEGER,
// 	// ActorConnectionPointType.OBJECT_3D,
// 	ActorConnectionPointType.STRING,
// 	// ActorConnectionPointType.TRIGGER,
// 	ActorConnectionPointType.VECTOR2,
// 	ActorConnectionPointType.VECTOR3,
// 	ActorConnectionPointType.VECTOR4,
// ];

// //
// //
// // Map to convert from a Actor Data type to a ParamType
// //
// //
// type ActorConnectionPointTypeToParamTypeMapGeneric = {[key in ActorConnectionPointType]: ParamType};
// export interface ActorIConnectionPointTypeToParamTypeMap extends ActorConnectionPointTypeToParamTypeMapGeneric {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: ParamType.BUTTON;
// 	[ActorConnectionPointType.ANIMATION_ACTION]: ParamType.BUTTON;
// 	[ActorConnectionPointType.BOOLEAN]: ParamType.BOOLEAN;
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.BOX3]: ParamType.BUTTON;
// 	[ActorConnectionPointType.CAMERA]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: ParamType.BUTTON;
// 	[ActorConnectionPointType.COLOR]: ParamType.COLOR;
// 	[ActorConnectionPointType.COLOR_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.FLOAT]: ParamType.FLOAT;
// 	[ActorConnectionPointType.FLOAT_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.INTEGER]: ParamType.INTEGER;
// 	[ActorConnectionPointType.INTEGER_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.INTERSECTION]: ParamType.BUTTON;
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.MATERIAL]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.MATRIX4]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.OBJECT_3D]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.PLANE]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.QUATERNION]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.RAY]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.SPHERE]: ParamType.BUTTON; //
// 	[ActorConnectionPointType.STRING]: ParamType.STRING;
// 	[ActorConnectionPointType.STRING_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.TEXTURE]: ParamType.BUTTON;
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: ParamType.BUTTON;
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: ParamType.BUTTON;
// 	[ActorConnectionPointType.TRIGGER]: ParamType.BUTTON;
// 	[ActorConnectionPointType.VECTOR2]: ParamType.VECTOR2;
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.VECTOR3]: ParamType.VECTOR3;
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: ParamType.BUTTON;
// 	[ActorConnectionPointType.VECTOR4]: ParamType.VECTOR4;
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: ParamType.BUTTON;
// }
// export const ActorConnectionPointTypeToParamTypeMap: ActorIConnectionPointTypeToParamTypeMap = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: ParamType.BUTTON,
// 	[ActorConnectionPointType.ANIMATION_ACTION]: ParamType.BUTTON,
// 	[ActorConnectionPointType.BOOLEAN]: ParamType.BOOLEAN,
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.BOX3]: ParamType.BUTTON,
// 	[ActorConnectionPointType.CAMERA]: ParamType.BUTTON,
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: ParamType.BUTTON,
// 	[ActorConnectionPointType.COLOR]: ParamType.COLOR,
// 	[ActorConnectionPointType.COLOR_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.FLOAT]: ParamType.FLOAT,
// 	[ActorConnectionPointType.FLOAT_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.INTEGER]: ParamType.INTEGER,
// 	[ActorConnectionPointType.INTEGER_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.INTERSECTION]: ParamType.BUTTON,
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.MATERIAL]: ParamType.BUTTON,
// 	[ActorConnectionPointType.MATRIX4]: ParamType.BUTTON,
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.OBJECT_3D]: ParamType.BUTTON, // to reconsider
// 	[ActorConnectionPointType.PLANE]: ParamType.BUTTON, //
// 	[ActorConnectionPointType.QUATERNION]: ParamType.BUTTON, //
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: ParamType.BUTTON, //
// 	[ActorConnectionPointType.RAY]: ParamType.BUTTON, //
// 	[ActorConnectionPointType.SPHERE]: ParamType.BUTTON, //
// 	[ActorConnectionPointType.STRING]: ParamType.STRING,
// 	[ActorConnectionPointType.STRING_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.TEXTURE]: ParamType.BUTTON,
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: ParamType.BUTTON,
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: ParamType.BUTTON,
// 	[ActorConnectionPointType.TRIGGER]: ParamType.BUTTON,
// 	[ActorConnectionPointType.VECTOR2]: ParamType.VECTOR2,
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.VECTOR3]: ParamType.VECTOR3,
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: ParamType.BUTTON,
// 	[ActorConnectionPointType.VECTOR4]: ParamType.VECTOR4,
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: ParamType.BUTTON,
// };

// //
// //
// // Map to convert from a non array data Data type to a Array one
// //
// //
// type ActorConnectionPointTypeToArrayTypeMapGeneric = {[key in ActorConnectionPointType]: ActorConnectionPointType};
// export interface ActorIConnectionPointTypeToArrayTypeMap extends ActorConnectionPointTypeToArrayTypeMapGeneric {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: ActorConnectionPointType.ANIMATION_MIXER;
// 	[ActorConnectionPointType.ANIMATION_ACTION]: ActorConnectionPointType.ANIMATION_ACTION;
// 	[ActorConnectionPointType.BOOLEAN]: ActorConnectionPointType.BOOLEAN_ARRAY;
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: ActorConnectionPointType.BOOLEAN_ARRAY;
// 	[ActorConnectionPointType.BOX3]: ActorConnectionPointType.BOX3;
// 	[ActorConnectionPointType.CAMERA]: ActorConnectionPointType.CAMERA;
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: ActorConnectionPointType.CATMULL_ROM_CURVE3;
// 	[ActorConnectionPointType.COLOR]: ActorConnectionPointType.COLOR_ARRAY;
// 	[ActorConnectionPointType.COLOR_ARRAY]: ActorConnectionPointType.COLOR_ARRAY;
// 	[ActorConnectionPointType.FLOAT]: ActorConnectionPointType.FLOAT_ARRAY;
// 	[ActorConnectionPointType.FLOAT_ARRAY]: ActorConnectionPointType.FLOAT_ARRAY;
// 	[ActorConnectionPointType.INTEGER]: ActorConnectionPointType.INTEGER_ARRAY;
// 	[ActorConnectionPointType.INTEGER_ARRAY]: ActorConnectionPointType.INTEGER_ARRAY;
// 	[ActorConnectionPointType.INTERSECTION]: ActorConnectionPointType.INTERSECTION_ARRAY;
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: ActorConnectionPointType.INTERSECTION_ARRAY;
// 	[ActorConnectionPointType.MATERIAL]: ActorConnectionPointType.MATERIAL; //
// 	[ActorConnectionPointType.MATRIX4]: ActorConnectionPointType.MATRIX4_ARRAY; //
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: ActorConnectionPointType.MATRIX4_ARRAY; //
// 	[ActorConnectionPointType.OBJECT_3D]: ActorConnectionPointType.OBJECT_3D; //
// 	[ActorConnectionPointType.PLANE]: ActorConnectionPointType.PLANE; //
// 	[ActorConnectionPointType.QUATERNION]: ActorConnectionPointType.QUATERNION_ARRAY; //
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: ActorConnectionPointType.QUATERNION_ARRAY; //
// 	[ActorConnectionPointType.RAY]: ActorConnectionPointType.RAY; //
// 	[ActorConnectionPointType.SPHERE]: ActorConnectionPointType.SPHERE; //
// 	[ActorConnectionPointType.STRING]: ActorConnectionPointType.STRING_ARRAY;
// 	[ActorConnectionPointType.STRING_ARRAY]: ActorConnectionPointType.STRING_ARRAY;
// 	[ActorConnectionPointType.TEXTURE]: ActorConnectionPointType.TEXTURE_ARRAY;
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: ActorConnectionPointType.TEXTURE_ARRAY;
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: ActorConnectionPointType.TRACKING_RESULT_HAND;
// 	[ActorConnectionPointType.TRIGGER]: ActorConnectionPointType.TRIGGER;
// 	[ActorConnectionPointType.VECTOR2]: ActorConnectionPointType.VECTOR2_ARRAY;
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: ActorConnectionPointType.VECTOR2_ARRAY;
// 	[ActorConnectionPointType.VECTOR3]: ActorConnectionPointType.VECTOR3_ARRAY;
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: ActorConnectionPointType.VECTOR3_ARRAY;
// 	[ActorConnectionPointType.VECTOR4]: ActorConnectionPointType.VECTOR4_ARRAY;
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: ActorConnectionPointType.VECTOR4_ARRAY;
// }
// export const ActorConnectionPointTypeToArrayTypeMap: ActorIConnectionPointTypeToArrayTypeMap = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: ActorConnectionPointType.ANIMATION_MIXER,
// 	[ActorConnectionPointType.ANIMATION_ACTION]: ActorConnectionPointType.ANIMATION_ACTION,
// 	[ActorConnectionPointType.BOOLEAN]: ActorConnectionPointType.BOOLEAN_ARRAY,
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: ActorConnectionPointType.BOOLEAN_ARRAY,
// 	[ActorConnectionPointType.BOX3]: ActorConnectionPointType.BOX3,
// 	[ActorConnectionPointType.CAMERA]: ActorConnectionPointType.CAMERA,
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: ActorConnectionPointType.CATMULL_ROM_CURVE3,
// 	[ActorConnectionPointType.COLOR]: ActorConnectionPointType.COLOR_ARRAY,
// 	[ActorConnectionPointType.COLOR_ARRAY]: ActorConnectionPointType.COLOR_ARRAY,
// 	[ActorConnectionPointType.FLOAT]: ActorConnectionPointType.FLOAT_ARRAY,
// 	[ActorConnectionPointType.FLOAT_ARRAY]: ActorConnectionPointType.FLOAT_ARRAY,
// 	[ActorConnectionPointType.INTEGER]: ActorConnectionPointType.INTEGER_ARRAY,
// 	[ActorConnectionPointType.INTEGER_ARRAY]: ActorConnectionPointType.INTEGER_ARRAY,
// 	[ActorConnectionPointType.INTERSECTION]: ActorConnectionPointType.INTERSECTION_ARRAY,
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: ActorConnectionPointType.INTERSECTION_ARRAY,
// 	[ActorConnectionPointType.MATERIAL]: ActorConnectionPointType.MATERIAL,
// 	[ActorConnectionPointType.MATRIX4]: ActorConnectionPointType.MATRIX4_ARRAY,
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: ActorConnectionPointType.MATRIX4_ARRAY,
// 	[ActorConnectionPointType.OBJECT_3D]: ActorConnectionPointType.OBJECT_3D,
// 	[ActorConnectionPointType.PLANE]: ActorConnectionPointType.PLANE,
// 	[ActorConnectionPointType.QUATERNION]: ActorConnectionPointType.QUATERNION_ARRAY,
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: ActorConnectionPointType.QUATERNION_ARRAY,
// 	[ActorConnectionPointType.RAY]: ActorConnectionPointType.RAY,
// 	[ActorConnectionPointType.SPHERE]: ActorConnectionPointType.SPHERE, //
// 	[ActorConnectionPointType.STRING]: ActorConnectionPointType.STRING_ARRAY,
// 	[ActorConnectionPointType.STRING_ARRAY]: ActorConnectionPointType.STRING_ARRAY,
// 	[ActorConnectionPointType.TEXTURE]: ActorConnectionPointType.TEXTURE_ARRAY,
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: ActorConnectionPointType.TEXTURE_ARRAY,
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: ActorConnectionPointType.TRACKING_RESULT_HAND,
// 	[ActorConnectionPointType.TRIGGER]: ActorConnectionPointType.TRIGGER,
// 	[ActorConnectionPointType.VECTOR2]: ActorConnectionPointType.VECTOR2_ARRAY,
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: ActorConnectionPointType.VECTOR2_ARRAY,
// 	[ActorConnectionPointType.VECTOR3]: ActorConnectionPointType.VECTOR3_ARRAY,
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: ActorConnectionPointType.VECTOR3_ARRAY,
// 	[ActorConnectionPointType.VECTOR4]: ActorConnectionPointType.VECTOR4_ARRAY,
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: ActorConnectionPointType.VECTOR4_ARRAY,
// };

// export type ArrayabeonnectionPointType =
// 	| ActorConnectionPointType.BOOLEAN
// 	| ActorConnectionPointType.COLOR
// 	| ActorConnectionPointType.FLOAT
// 	| ActorConnectionPointType.INTEGER
// 	| ActorConnectionPointType.INTERSECTION
// 	| ActorConnectionPointType.MATRIX4
// 	| ActorConnectionPointType.QUATERNION
// 	| ActorConnectionPointType.STRING
// 	| ActorConnectionPointType.TEXTURE
// 	| ActorConnectionPointType.VECTOR2
// 	| ActorConnectionPointType.VECTOR3
// 	| ActorConnectionPointType.VECTOR4;
// export const ARRAYABLE_CONNECTION_TYPES: Set<ArrayabeonnectionPointType> = new Set([
// 	ActorConnectionPointType.BOOLEAN,
// 	ActorConnectionPointType.COLOR,
// 	ActorConnectionPointType.FLOAT,
// 	ActorConnectionPointType.INTEGER,
// 	ActorConnectionPointType.INTERSECTION,
// 	ActorConnectionPointType.MATRIX4,
// 	ActorConnectionPointType.QUATERNION,
// 	ActorConnectionPointType.STRING,
// 	ActorConnectionPointType.TEXTURE,
// 	ActorConnectionPointType.VECTOR2,
// 	ActorConnectionPointType.VECTOR3,
// 	ActorConnectionPointType.VECTOR4,
// ]);
// type ArrayConnectionPointTypeArray =
// 	| ActorConnectionPointType.BOOLEAN_ARRAY
// 	| ActorConnectionPointType.COLOR_ARRAY
// 	| ActorConnectionPointType.FLOAT_ARRAY
// 	| ActorConnectionPointType.INTEGER_ARRAY
// 	| ActorConnectionPointType.INTERSECTION_ARRAY
// 	| ActorConnectionPointType.MATRIX4_ARRAY
// 	| ActorConnectionPointType.QUATERNION_ARRAY
// 	| ActorConnectionPointType.STRING_ARRAY
// 	| ActorConnectionPointType.TEXTURE_ARRAY
// 	| ActorConnectionPointType.VECTOR2_ARRAY
// 	| ActorConnectionPointType.VECTOR3_ARRAY
// 	| ActorConnectionPointType.VECTOR4_ARRAY;
// const ARRAY_CONNECTION_TYPES: Set<ArrayConnectionPointTypeArray> = new Set([
// 	ActorConnectionPointType.BOOLEAN_ARRAY,
// 	ActorConnectionPointType.COLOR_ARRAY,
// 	ActorConnectionPointType.FLOAT_ARRAY,
// 	ActorConnectionPointType.INTEGER_ARRAY,
// 	ActorConnectionPointType.INTERSECTION_ARRAY,
// 	ActorConnectionPointType.MATRIX4_ARRAY,
// 	ActorConnectionPointType.QUATERNION_ARRAY,
// 	ActorConnectionPointType.STRING_ARRAY,
// 	ActorConnectionPointType.TEXTURE_ARRAY,
// 	ActorConnectionPointType.VECTOR2_ARRAY,
// 	ActorConnectionPointType.VECTOR3_ARRAY,
// 	ActorConnectionPointType.VECTOR4_ARRAY,
// ]);

// //
// //
// // Map to convert from a ParamType to Actor Data type
// //
// //
// type ActorParamTypeToConnectionPointTypeMapGeneric = {[key in ParamType]: ActorConnectionPointType | undefined};
// export interface IActorParamTypeToConnectionPointTypeMap extends ActorParamTypeToConnectionPointTypeMapGeneric {
// 	[ParamType.BOOLEAN]: ActorConnectionPointType.BOOLEAN;
// 	[ParamType.BUTTON]: undefined;
// 	[ParamType.COLOR]: ActorConnectionPointType.COLOR;
// 	[ParamType.FLOAT]: ActorConnectionPointType.FLOAT;
// 	[ParamType.FOLDER]: undefined;
// 	[ParamType.INTEGER]: ActorConnectionPointType.INTEGER;
// 	[ParamType.NODE_PATH]: undefined;
// 	[ParamType.PARAM_PATH]: undefined;
// 	[ParamType.RAMP]: undefined;
// 	[ParamType.STRING]: ActorConnectionPointType.STRING;
// 	[ParamType.VECTOR2]: ActorConnectionPointType.VECTOR2;
// 	[ParamType.VECTOR3]: ActorConnectionPointType.VECTOR3;
// 	[ParamType.VECTOR4]: ActorConnectionPointType.VECTOR4;
// }
// export const ActorParamTypeToConnectionPointTypeMap: IActorParamTypeToConnectionPointTypeMap = {
// 	[ParamType.BOOLEAN]: ActorConnectionPointType.BOOLEAN,
// 	[ParamType.BUTTON]: undefined,
// 	[ParamType.COLOR]: ActorConnectionPointType.COLOR,
// 	[ParamType.FLOAT]: ActorConnectionPointType.FLOAT,
// 	[ParamType.FOLDER]: undefined,
// 	[ParamType.INTEGER]: ActorConnectionPointType.INTEGER,
// 	[ParamType.PARAM_PATH]: undefined,
// 	[ParamType.NODE_PATH]: undefined,
// 	[ParamType.RAMP]: undefined,
// 	[ParamType.STRING]: ActorConnectionPointType.STRING,
// 	[ParamType.VECTOR2]: ActorConnectionPointType.VECTOR2,
// 	[ParamType.VECTOR3]: ActorConnectionPointType.VECTOR3,
// 	[ParamType.VECTOR4]: ActorConnectionPointType.VECTOR4,
// };

// //
// //
// // Map of Data type default values
// //
// //
// export type ActorConnectionPointInitValueMapGeneric = {
// 	[key in ActorConnectionPointType]: ParamInitValuesTypeMap[ActorIConnectionPointTypeToParamTypeMap[key]];
// };
// export const ActorConnectionPointInitValueMap: ActorConnectionPointInitValueMapGeneric = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: null,
// 	[ActorConnectionPointType.ANIMATION_ACTION]: null,
// 	[ActorConnectionPointType.BOOLEAN]: false,
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: null,
// 	[ActorConnectionPointType.BOX3]: null,
// 	[ActorConnectionPointType.CAMERA]: null,
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: null,
// 	[ActorConnectionPointType.COLOR]: new Color(),
// 	[ActorConnectionPointType.COLOR_ARRAY]: null,
// 	[ActorConnectionPointType.FLOAT]: 0,
// 	[ActorConnectionPointType.FLOAT_ARRAY]: null,
// 	[ActorConnectionPointType.INTEGER]: 0,
// 	[ActorConnectionPointType.INTEGER_ARRAY]: null,
// 	[ActorConnectionPointType.INTERSECTION]: null,
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: null,
// 	[ActorConnectionPointType.MATERIAL]: null,
// 	[ActorConnectionPointType.MATRIX4]: null,
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: null,
// 	[ActorConnectionPointType.OBJECT_3D]: null,
// 	[ActorConnectionPointType.PLANE]: null,
// 	[ActorConnectionPointType.QUATERNION]: null,
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: null,
// 	[ActorConnectionPointType.RAY]: null,
// 	[ActorConnectionPointType.SPHERE]: null,
// 	[ActorConnectionPointType.STRING]: '',
// 	[ActorConnectionPointType.STRING_ARRAY]: null,
// 	[ActorConnectionPointType.TEXTURE]: null,
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: null,
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: null,
// 	[ActorConnectionPointType.TRIGGER]: null,
// 	[ActorConnectionPointType.VECTOR2]: new Vector2(),
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: null,
// 	[ActorConnectionPointType.VECTOR3]: new Vector3(),
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: null,
// 	[ActorConnectionPointType.VECTOR4]: new Vector4(),
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: null,
// };

// //
// //
// // Map of Data type component counts
// //
// //
// export type ConnectionPointComponentsCountMapGeneric = {
// 	[key in ActorConnectionPointType]: number;
// };
// export const ActorConnectionPointComponentsCountMap: ConnectionPointComponentsCountMapGeneric = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: 1,
// 	[ActorConnectionPointType.ANIMATION_ACTION]: 1,
// 	[ActorConnectionPointType.BOOLEAN]: 1,
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: 1,
// 	[ActorConnectionPointType.BOX3]: 1,
// 	[ActorConnectionPointType.CAMERA]: 1,
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: 1,
// 	[ActorConnectionPointType.COLOR]: 3,
// 	[ActorConnectionPointType.COLOR_ARRAY]: 1,
// 	[ActorConnectionPointType.FLOAT]: 1,
// 	[ActorConnectionPointType.FLOAT_ARRAY]: 1,
// 	[ActorConnectionPointType.INTEGER]: 1,
// 	[ActorConnectionPointType.INTEGER_ARRAY]: 1,
// 	[ActorConnectionPointType.INTERSECTION]: 1,
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: 1,
// 	[ActorConnectionPointType.MATERIAL]: 1,
// 	[ActorConnectionPointType.MATRIX4]: 16,
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: 1,
// 	[ActorConnectionPointType.OBJECT_3D]: 1, // to reconsider
// 	[ActorConnectionPointType.PLANE]: 1, //
// 	[ActorConnectionPointType.QUATERNION]: 4, //
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: 1, //
// 	[ActorConnectionPointType.RAY]: 1, //
// 	[ActorConnectionPointType.SPHERE]: 1, //
// 	[ActorConnectionPointType.STRING]: 1,
// 	[ActorConnectionPointType.STRING_ARRAY]: 1,
// 	[ActorConnectionPointType.TEXTURE]: 1,
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: 1,
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: 1,
// 	[ActorConnectionPointType.TRIGGER]: 1,
// 	[ActorConnectionPointType.VECTOR2]: 2,
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: 2,
// 	[ActorConnectionPointType.VECTOR3]: 3,
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: 3,
// 	[ActorConnectionPointType.VECTOR4]: 4,
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: 4,
// };

// //
// //
// // Map of Actor Data type default values
// //
// //

// export type ReturnValueTypeByActorConnectionPointType = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: AnimationMixer;
// 	[ActorConnectionPointType.ANIMATION_ACTION]: AnimationAction;
// 	[ActorConnectionPointType.BOOLEAN]: boolean;
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: boolean[];
// 	[ActorConnectionPointType.BOX3]: Box3;
// 	[ActorConnectionPointType.CAMERA]: Camera;
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: CatmullRomCurve3;
// 	[ActorConnectionPointType.COLOR]: Color;
// 	[ActorConnectionPointType.COLOR_ARRAY]: Color[];
// 	[ActorConnectionPointType.FLOAT]: number;
// 	[ActorConnectionPointType.FLOAT_ARRAY]: number[];
// 	[ActorConnectionPointType.INTEGER]: number;
// 	[ActorConnectionPointType.INTEGER_ARRAY]: number[];
// 	[ActorConnectionPointType.INTERSECTION]: Intersection;
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: Intersection[];
// 	[ActorConnectionPointType.MATERIAL]: Material;
// 	[ActorConnectionPointType.MATRIX4]: Matrix4;
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: Matrix4[];
// 	[ActorConnectionPointType.OBJECT_3D]: Object3D;
// 	[ActorConnectionPointType.PLANE]: Plane;
// 	[ActorConnectionPointType.QUATERNION]: Quaternion;
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: Quaternion[];
// 	[ActorConnectionPointType.RAY]: Ray;
// 	[ActorConnectionPointType.SPHERE]: Sphere;
// 	[ActorConnectionPointType.STRING]: string;
// 	[ActorConnectionPointType.STRING_ARRAY]: string[];
// 	[ActorConnectionPointType.TEXTURE]: Texture;
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: Texture[];
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: TrackingResultHand;
// 	[ActorConnectionPointType.TRIGGER]: null;
// 	[ActorConnectionPointType.VECTOR2]: Vector2;
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: Vector2[];
// 	[ActorConnectionPointType.VECTOR3]: Vector3;
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: Vector3[];
// 	[ActorConnectionPointType.VECTOR4]: Vector4;
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: Vector4[];
// };

// //
// //
// // Map to convert from a Actor Data type to sub types Actor Data type
// //
// //
// type ActorConnectionPointTypeToSubTypeMapGeneric = {
// 	[key in ActorConnectionPointType]: null | Set<ActorConnectionPointType>;
// };
// export interface ActorIConnectionPointTypeToSubTypeMap extends ActorConnectionPointTypeToSubTypeMapGeneric {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: null;
// 	[ActorConnectionPointType.ANIMATION_ACTION]: null;
// 	[ActorConnectionPointType.BOOLEAN]: null;
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: null;
// 	[ActorConnectionPointType.BOX3]: null;
// 	[ActorConnectionPointType.CAMERA]: null;
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: null;
// 	[ActorConnectionPointType.COLOR]: null;
// 	[ActorConnectionPointType.COLOR_ARRAY]: null;
// 	[ActorConnectionPointType.FLOAT]: null;
// 	[ActorConnectionPointType.FLOAT_ARRAY]: null;
// 	[ActorConnectionPointType.INTEGER]: null;
// 	[ActorConnectionPointType.INTEGER_ARRAY]: null;
// 	[ActorConnectionPointType.INTERSECTION]: null;
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: null;
// 	[ActorConnectionPointType.MATERIAL]: null;
// 	[ActorConnectionPointType.MATRIX4]: null;
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: null;
// 	[ActorConnectionPointType.OBJECT_3D]: Set<ActorConnectionPointType>;
// 	[ActorConnectionPointType.PLANE]: null;
// 	[ActorConnectionPointType.QUATERNION]: null;
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: null;
// 	[ActorConnectionPointType.RAY]: null;
// 	[ActorConnectionPointType.SPHERE]: null;
// 	[ActorConnectionPointType.STRING]: null;
// 	[ActorConnectionPointType.STRING_ARRAY]: null;
// 	[ActorConnectionPointType.TEXTURE]: null;
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: null;
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: null;
// 	[ActorConnectionPointType.TRIGGER]: null;
// 	[ActorConnectionPointType.VECTOR2]: null;
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: null;
// 	[ActorConnectionPointType.VECTOR3]: null;
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: null;
// 	[ActorConnectionPointType.VECTOR4]: null;
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: null;
// }
// export const ActorConnectionPointTypeToSubTypeMap: ActorIConnectionPointTypeToSubTypeMap = {
// 	[ActorConnectionPointType.ANIMATION_MIXER]: null,
// 	[ActorConnectionPointType.ANIMATION_ACTION]: null,
// 	[ActorConnectionPointType.BOOLEAN]: null,
// 	[ActorConnectionPointType.BOOLEAN_ARRAY]: null,
// 	[ActorConnectionPointType.BOX3]: null,
// 	[ActorConnectionPointType.CAMERA]: null,
// 	[ActorConnectionPointType.CATMULL_ROM_CURVE3]: null,
// 	[ActorConnectionPointType.COLOR]: null,
// 	[ActorConnectionPointType.COLOR_ARRAY]: null,
// 	[ActorConnectionPointType.FLOAT]: null,
// 	[ActorConnectionPointType.FLOAT_ARRAY]: null,
// 	[ActorConnectionPointType.INTEGER]: null,
// 	[ActorConnectionPointType.INTEGER_ARRAY]: null,
// 	[ActorConnectionPointType.INTERSECTION]: null,
// 	[ActorConnectionPointType.INTERSECTION_ARRAY]: null,
// 	[ActorConnectionPointType.MATERIAL]: null,
// 	[ActorConnectionPointType.MATRIX4]: null,
// 	[ActorConnectionPointType.MATRIX4_ARRAY]: null,
// 	[ActorConnectionPointType.OBJECT_3D]: new Set([ActorConnectionPointType.CAMERA]),
// 	[ActorConnectionPointType.PLANE]: null,
// 	[ActorConnectionPointType.QUATERNION]: null,
// 	[ActorConnectionPointType.QUATERNION_ARRAY]: null,
// 	[ActorConnectionPointType.RAY]: null,
// 	[ActorConnectionPointType.SPHERE]: null,
// 	[ActorConnectionPointType.STRING]: null,
// 	[ActorConnectionPointType.STRING_ARRAY]: null,
// 	[ActorConnectionPointType.TEXTURE]: null,
// 	[ActorConnectionPointType.TEXTURE_ARRAY]: null,
// 	// [ActorConnectionPointType.TRACKING_RESULT_HAND]: null,
// 	[ActorConnectionPointType.TRIGGER]: null,
// 	[ActorConnectionPointType.VECTOR2]: null,
// 	[ActorConnectionPointType.VECTOR2_ARRAY]: null,
// 	[ActorConnectionPointType.VECTOR3]: null,
// 	[ActorConnectionPointType.VECTOR3_ARRAY]: null,
// 	[ActorConnectionPointType.VECTOR4]: null,
// 	[ActorConnectionPointType.VECTOR4_ARRAY]: null,
// };

// export interface ActorConnectionPointData<T extends ActorConnectionPointType> {
// 	name: string;
// 	type: T;
// 	isArray: boolean;
// }
// interface ActorConnectionPointOptions<T extends ActorConnectionPointType> {
// 	inNodeDefinition?: boolean;
// 	init_value?: ActorConnectionPointInitValueMapGeneric[T];
// }
// export const ACTOR_CONNECTION_POINT_IN_NODE_DEF: ActorConnectionPointOptions<ActorConnectionPointType> = {
// 	inNodeDefinition: true,
// };

// export class ActorConnectionPoint<T extends ActorConnectionPointType> extends BaseConnectionPoint {
// 	protected override _json: ActorConnectionPointData<T> | undefined;
// 	protected override _init_value?: ActorConnectionPointInitValueMapGeneric[T];
// 	protected _isArray: boolean;

// 	constructor(
// 		protected override _name: string,
// 		protected override _type: T,
// 		_options?: ActorConnectionPointOptions<T>
// 	) {
// 		super(_name, _type);

// 		this._isArray = ARRAY_CONNECTION_TYPES.has(_type as ArrayConnectionPointTypeArray);

// 		if (_options) {
// 			this._inNodeDefinition = _options.inNodeDefinition == true;
// 			this._init_value = _options.init_value;
// 		}
// 		this._init_value = this._init_value || ActorConnectionPointInitValueMap[this._type];

// 		if (CoreType.isColor(this._init_value) || CoreType.isVector(this._init_value)) {
// 			this._init_value = this._init_value.clone() as ActorConnectionPointInitValueMapGeneric[T];
// 		}
// 	}
// 	override type() {
// 		return this._type;
// 	}
// 	get param_type(): ActorIConnectionPointTypeToParamTypeMap[T] | null {
// 		const type = ActorConnectionPointTypeToParamTypeMap[this._type];
// 		// we can't (yet?) have buttons from connections
// 		// and this test is just here so that some connection types (matrix/object/material)
// 		// do not have a parameter created, since it would not make sense for those data types
// 		if (type == ParamType.BUTTON) {
// 			return null;
// 		} else {
// 			return type;
// 		}
// 	}
// 	override get init_value() {
// 		return this._init_value;
// 	}
// 	override are_types_matched(srcType: string, destType: string): boolean {
// 		if (srcType == destType) {
// 			return true;
// 		}
// 		const subTypes = ActorConnectionPointTypeToSubTypeMap[destType as ActorConnectionPointType];
// 		if (subTypes) {
// 			return subTypes.has(srcType as ActorConnectionPointType);
// 		} else {
// 			return false;
// 		}
// 	}

// 	override toJSON(): ActorConnectionPointData<T> {
// 		return (this._json = this._json || this._create_json());
// 	}
// 	protected override _create_json(): ActorConnectionPointData<T> {
// 		return {
// 			name: this._name,
// 			type: this._type,
// 			isArray: this._isArray,
// 		};
// 	}
// }

// export type BaseActorConnectionPoint = ActorConnectionPoint<ActorConnectionPointType>;
