import {CATEGORY_JS} from './Category';

import {AbsJsNode} from '../../../nodes/js/Abs';
import {AcosJsNode} from '../../../nodes/js/Acos';
import {AddJsNode} from '../../../nodes/js/Add';
import {AndJsNode} from '../../../nodes/js/And';
import {AnimationActionJsNode} from '../../../nodes/js/AnimationAction';
import {AnimationActionCrossFadeJsNode} from '../../../nodes/js/AnimationActionCrossFade';
import {AnimationActionFadeOutJsNode} from '../../../nodes/js/AnimationActionFadeOut';
import {AnimationActionFadeInJsNode} from '../../../nodes/js/AnimationActionFadeIn';
import {AnimationActionPlayJsNode} from '../../../nodes/js/AnimationActionPlay';
import {AnimationActionStopJsNode} from '../../../nodes/js/AnimationActionStop';
import {AnimationMixerJsNode} from '../../../nodes/js/AnimationMixer';
import {AnimationMixerUpdateJsNode} from '../../../nodes/js/AnimationMixerUpdate';
import {ArrayElementJsNode} from '../../../nodes/js/ArrayElement';
import {ArrayLengthJsNode} from '../../../nodes/js/ArrayLength';
import {AsinJsNode} from '../../../nodes/js/Asin';
import {AtanJsNode} from '../../../nodes/js/Atan';
import {AttributeJsNode} from '../../../nodes/js/Attribute';
import {BoolToIntJsNode} from '../../../nodes/js/BoolToInt';
import {Box3JsNode} from '../../../nodes/js/Box3';
import {CatmullRomCurve3GetPointJsNode} from '../../../nodes/js/CatmullRomCurve3GetPoint';
import {CeilJsNode} from '../../../nodes/js/Ceil';
import {ClampJsNode} from '../../../nodes/js/Clamp';
import {ColorToVec3JsNode} from '../../../nodes/js/ColorToVec3';
import {CompareJsNode} from '../../../nodes/js/Compare';
import {ComplementJsNode} from '../../../nodes/js/Complement';
import {ConstantJsNode} from '../../../nodes/js/Constant';
import {CosJsNode} from '../../../nodes/js/Cos';
import {CrossJsNode} from '../../../nodes/js/Cross';
import {CursorJsNode} from '../../../nodes/js/Cursor';
import {DebugJsNode} from '../../../nodes/js/Debug';
import {DistanceJsNode} from '../../../nodes/js/Distance';
import {DivideJsNode} from '../../../nodes/js/Divide';
import {DotJsNode} from '../../../nodes/js/Dot';
import {EasingJsNode} from '../../../nodes/js/Easing';
import {ElementsToArrayJsNode} from '../../../nodes/js/ElementsToArray';
import {FitJsNode} from '../../../nodes/js/Fit';
import {FloatToColorJsNode} from '../../../nodes/js/FloatToColor';
import {FloatToIntJsNode} from '../../../nodes/js/FloatToInt';
import {FloatToVec2JsNode} from '../../../nodes/js/FloatToVec2';
import {FloatToVec3JsNode} from '../../../nodes/js/FloatToVec3';
import {FloatToVec4JsNode} from '../../../nodes/js/FloatToVec4';
import {FloorJsNode} from '../../../nodes/js/Floor';
import {GetBox3PropertyJsNode} from '../../../nodes/js/GetBox3Property';
import {GetMaterialJsNode} from '../../../nodes/js/GetMaterial';
import {GetObjectJsNode} from '../../../nodes/js/GetObject';
import {GetObjectAttributeJsNode} from '../../../nodes/js/GetObjectAttribute';
import {GetObjectPropertyJsNode} from '../../../nodes/js/GetObjectProperty';
import {GetObjectUserDataJsNode} from '../../../nodes/js/GetObjectUserData';
import {GetParentJsNode} from '../../../nodes/js/GetParent';
import {GetPhysicsRBDConePropertyJsNode} from '../../../nodes/js/GetPhysicsRBDConeProperty';
import {GetPhysicsRBDCapsulePropertyJsNode} from '../../../nodes/js/GetPhysicsRBDCapsuleProperty';
import {GetPhysicsRBDCylinderPropertyJsNode} from '../../../nodes/js/GetPhysicsRBDCylinderProperty';
import {GetPhysicsRBDCuboidPropertyJsNode} from '../../../nodes/js/GetPhysicsRBDCuboidProperty';
import {GetPhysicsRBDSpherePropertyJsNode} from '../../../nodes/js/GetPhysicsRBDSphereProperty';
import {GetPhysicsRBDPropertyJsNode} from '../../../nodes/js/GetPhysicsRBDProperty';
import {GetPlanePropertyJsNode} from '../../../nodes/js/GetPlaneProperty';
import {GetRayPropertyJsNode} from '../../../nodes/js/GetRayProperty';
import {GetSpherePropertyJsNode} from '../../../nodes/js/GetSphereProperty';
import {GetTextureJsNode} from '../../../nodes/js/GetTexture';
import {GetTrackedHandPropertyJsNode} from '../../../nodes/js/GetTrackedHandProperty';
import {GetWebXRTrackedMarkerPropertyJsNode} from '../../../nodes/js/GetWebXRTrackedMarkerProperty';
import {GlobalsJsNode} from '../../../nodes/js/Globals';
import {IntToBoolJsNode} from '../../../nodes/js/IntToBool';
import {IntToFloatJsNode} from '../../../nodes/js/IntToFloat';
import {LengthJsNode} from '../../../nodes/js/Length';
import {ManhattanDistanceJsNode} from '../../../nodes/js/ManhattanDistance';
import {MaxJsNode} from '../../../nodes/js/Max';
import {MaxLengthJsNode} from '../../../nodes/js/MaxLength';
import {MinJsNode} from '../../../nodes/js/Min';
import {MixJsNode} from '../../../nodes/js/Mix';
import {MultJsNode} from '../../../nodes/js/Mult';
import {MultAddJsNode} from '../../../nodes/js/MultAdd';
import {MultScalarJsNode} from '../../../nodes/js/MultScalar';
import {NearestPositionJsNode} from '../../../nodes/js/NearestPosition';
import {NegateJsNode} from '../../../nodes/js/Negate';
import {NormalizeJsNode} from '../../../nodes/js/Normalize';
import {NullJsNode} from '../../../nodes/js/Null';
import {OnKeydownJsNode} from '../../../nodes/js/OnKeydown';
import {OnKeypressJsNode} from '../../../nodes/js/OnKeypress';
import {OnKeyupJsNode} from '../../../nodes/js/OnKeyup';
import {OnManualTriggerJsNode} from '../../../nodes/js/OnManualTrigger';
import {OnMapboxCameraMoveJsNode} from '../../../nodes/js/OnMapboxCameraMove';
import {OnMapboxCameraMoveEndJsNode} from '../../../nodes/js/OnMapboxCameraMoveEnd';
import {OnMapboxCameraMoveStartJsNode} from '../../../nodes/js/OnMapboxCameraMoveStart';
import {OnObjectAttributeUpdateJsNode} from '../../../nodes/js/OnObjectAttributeUpdate';
import {OnObjectClickJsNode} from '../../../nodes/js/OnObjectClick';
import {OnObjectHoverJsNode} from '../../../nodes/js/OnObjectHover';
import {OnPerformanceChangeJsNode} from '../../../nodes/js/OnPerformanceChange';
import {OnScenePauseJsNode} from '../../../nodes/js/OnScenePause';
import {OnScenePlayJsNode} from '../../../nodes/js/OnScenePlay';
import {OnSceneResetJsNode} from '../../../nodes/js/OnSceneReset';
import {OnTickJsNode} from '../../../nodes/js/OnTick';
import {OrJsNode} from '../../../nodes/js/Or';
import {OutputJsNode} from '../../../nodes/js/Output';
import {ParamJsNode} from '../../../nodes/js/Param';
import {ParticlesSystemResetJsNode} from '../../../nodes/js/ParticlesSystemReset';
import {ParticlesSystemStepSimulationJsNode} from '../../../nodes/js/ParticlesSystemStepSimulation';
import {PhysicsRBDAddForceJsNode} from '../../../nodes/js/PhysicsRBDAddForce';
import {PhysicsRBDAddForceAtPointJsNode} from '../../../nodes/js/PhysicsRBDAddForceAtPoint';
import {PhysicsRBDAddTorqueJsNode} from '../../../nodes/js/PhysicsRBDAddTorque';
import {PhysicsRBDApplyImpulseJsNode} from '../../../nodes/js/PhysicsRBDApplyImpulse';
import {PhysicsRBDApplyTorqueImpulseJsNode} from '../../../nodes/js/PhysicsRBDApplyTorqueImpulse';
import {PhysicsRBDApplyImpulseAtPointJsNode} from '../../../nodes/js/PhysicsRBDApplyImpulseAtPoint';
import {PhysicsRBDRemoveJsNode} from '../../../nodes/js/PhysicsRBDRemove';
import {PhysicsRBDResetAllJsNode} from '../../../nodes/js/PhysicsRBDResetAll';
import {PhysicsRBDResetForcesJsNode} from '../../../nodes/js/PhysicsRBDResetForces';
import {PhysicsRBDResetTorquesJsNode} from '../../../nodes/js/PhysicsRBDResetTorques';
import {PhysicsWorldResetJsNode} from '../../../nodes/js/PhysicsWorldReset';
import {PhysicsWorldStepSimulationJsNode} from '../../../nodes/js/PhysicsWorldStepSimulation';
import {PlaneJsNode} from '../../../nodes/js/Plane';
import {PowJsNode} from '../../../nodes/js/Pow';

import {RandJsNode} from '../../../nodes/js/Rand';
import {RandomJsNode} from '../../../nodes/js/Random';
import {RayJsNode} from '../../../nodes/js/Ray';
import {RayFromCameraJsNode} from '../../../nodes/js/RayFromCamera';
import {RayFromCursorJsNode} from '../../../nodes/js/RayFromCursor';
import {RayIntersectBoxJsNode} from '../../../nodes/js/RayIntersectBox';
import {RayIntersectsBoxJsNode} from '../../../nodes/js/RayIntersectsBox';
import {RayIntersectObjectJsNode} from '../../../nodes/js/RayIntersectObject';
import {RayIntersectsObjectJsNode} from '../../../nodes/js/RayIntersectsObject';
import {RayDistanceToPlaneJsNode} from '../../../nodes/js/RayDistanceToPlane';
import {RayIntersectPlaneJsNode} from '../../../nodes/js/RayIntersectPlane';
import {RayIntersectsPlaneJsNode} from '../../../nodes/js/RayIntersectsPlane';
import {RayIntersectSphereJsNode} from '../../../nodes/js/RayIntersectSphere';
import {RayIntersectsSphereJsNode} from '../../../nodes/js/RayIntersectsSphere';

import {RoundJsNode} from '../../../nodes/js/Round';
import {SDF2DRoundedXJsNode} from '../../../nodes/js/SDF2DRoundedX';
import {SDFBoxJsNode} from '../../../nodes/js/SDFBox';
import {SDFIntersectJsNode} from '../../../nodes/js/SDFIntersect';
import {SDFRevolutionJsNode} from '../../../nodes/js/SDFRevolution';
import {SDFSphereJsNode} from '../../../nodes/js/SDFSphere';
import {SDFSubtractJsNode} from '../../../nodes/js/SDFSubtract';
import {SDFUnionJsNode} from '../../../nodes/js/SDFUnion';

import {SetGeometryPositionsJsNode} from '../../../nodes/js/SetGeometryPositions';
import {SetMaterialColorJsNode} from '../../../nodes/js/SetMaterialColor';
import {SetMaterialEmissiveColorJsNode} from '../../../nodes/js/SetMaterialEmissiveColor';
import {SetMaterialOpacityJsNode} from '../../../nodes/js/SetMaterialOpacity';
import {SetMaterialUniformJsNode} from '../../../nodes/js/SetMaterialUniform';
import {SetObjectAttributeJsNode} from '../../../nodes/js/SetObjectAttribute';
import {SetObjectCastShadowJsNode} from '../../../nodes/js/SetObjectCastShadow';
import {SetObjectFrustumCulledJsNode} from '../../../nodes/js/SetObjectFrustumCulled';
import {SetObjectLookAtJsNode} from '../../../nodes/js/SetObjectLookAt';
import {SetObjectMaterialJsNode} from '../../../nodes/js/SetObjectMaterial';
import {SetObjectMaterialColorJsNode} from '../../../nodes/js/SetObjectMaterialColor';
import {SetObjectMatrixJsNode} from '../../../nodes/js/SetObjectMatrix';
import {SetObjectMatrixAutoUpdateJsNode} from '../../../nodes/js/SetObjectMatrixAutoUpdate';
import {SetObjectPositionJsNode} from '../../../nodes/js/SetObjectPosition';
import {SetObjectReceiveShadowJsNode} from '../../../nodes/js/SetObjectReceiveShadow';
import {SetObjectRotationJsNode} from '../../../nodes/js/SetObjectRotation';
import {SetObjectPolarTransformJsNode} from '../../../nodes/js/SetObjectPolarTransform';
import {SetObjectScaleJsNode} from '../../../nodes/js/SetObjectScale';
import {SetObjectVisibleJsNode} from '../../../nodes/js/SetObjectVisible';
import {SetPerspectiveCameraFovJsNode} from '../../../nodes/js/SetPerspectiveCameraFov';
import {SetPerspectiveCameraNearFarJsNode} from '../../../nodes/js/SetPerspectiveCameraNearFar';
import {SetPhysicsRBDAngularVelocityJsNode} from '../../../nodes/js/SetPhysicsRBDAngularVelocity';
import {SetPhysicsRBDLinearVelocityJsNode} from '../../../nodes/js/SetPhysicsRBDLinearVelocity';
import {SetPhysicsRBDPositionJsNode} from '../../../nodes/js/SetPhysicsRBDPosition';
import {SetPhysicsRBDRotationJsNode} from '../../../nodes/js/SetPhysicsRBDRotation';
import {SetPhysicsRBDCapsulePropertyJsNode} from '../../../nodes/js/SetPhysicsRBDCapsuleProperty';
import {SetPhysicsRBDConePropertyJsNode} from '../../../nodes/js/SetPhysicsRBDConeProperty';
import {SetPhysicsRBDCylinderPropertyJsNode} from '../../../nodes/js/SetPhysicsRBDCylinderProperty';
import {SetPhysicsRBDCuboidPropertyJsNode} from '../../../nodes/js/SetPhysicsRBDCuboidProperty';
import {SetPhysicsRBDSpherePropertyJsNode} from '../../../nodes/js/SetPhysicsRBDSphereProperty';
import {SetPhysicsWorldGravityJsNode} from '../../../nodes/js/SetPhysicsWorldGravity';
import {SetSpotLightIntensityJsNode} from '../../../nodes/js/SetSpotLightIntensity';
import {SignJsNode} from '../../../nodes/js/Sign';
import {SinJsNode} from '../../../nodes/js/Sin';
import {SmoothstepJsNode} from '../../../nodes/js/Smoothstep';
import {SphereJsNode} from '../../../nodes/js/Sphere';
import {SqrtJsNode} from '../../../nodes/js/Sqrt';
import {SubtractJsNode} from '../../../nodes/js/Subtract';
import {SwitchJsNode} from '../../../nodes/js/Switch';
import {TanJsNode} from '../../../nodes/js/Tan';
import {TrackFaceJsNode} from '../../../nodes/js/TrackFace';
import {TrackHandJsNode} from '../../../nodes/js/TrackHand';
import {TwoWaySwitchJsNode} from '../../../nodes/js/TwoWaySwitch';
import {Vector3AngleToJsNode} from '../../../nodes/js/Vector3AngleTo';
import {Vector3ProjectJsNode} from '../../../nodes/js/Vector3Project';
import {Vector3ProjectOnPlaneJsNode} from '../../../nodes/js/Vector3ProjectOnPlane';
import {Vector3UnprojectJsNode} from '../../../nodes/js/Vector3Unproject';
import {Vec2ToFloatJsNode} from '../../../nodes/js/Vec2ToFloat';
import {Vec2ToVec3JsNode} from '../../../nodes/js/Vec2ToVec3';
import {Vec3ToFloatJsNode} from '../../../nodes/js/Vec3ToFloat';
import {Vec3ToColorJsNode} from '../../../nodes/js/Vec3ToColor';
import {Vec3ToVec2JsNode} from '../../../nodes/js/Vec3ToVec2';
import {Vec3ToVec4JsNode} from '../../../nodes/js/Vec3ToVec4';
import {Vec4ToFloatJsNode} from '../../../nodes/js/Vec4ToFloat';
import {Vec4ToVec3JsNode} from '../../../nodes/js/Vec4ToVec3';

export interface JsNodeChildrenMap {
	abs: AbsJsNode;
	add: AddJsNode;
	acos: AcosJsNode;
	and: AndJsNode;
	animationAction: AnimationActionJsNode;
	animationActionCrossFade: AnimationActionCrossFadeJsNode;
	animationActionFadeOut: AnimationActionFadeOutJsNode;
	animationActionFadeIn: AnimationActionFadeInJsNode;
	animationActionPlay: AnimationActionPlayJsNode;
	animationActionStop: AnimationActionStopJsNode;
	animationMixer: AnimationMixerJsNode;
	animationMixerUpdate: AnimationMixerUpdateJsNode;
	arrayElement: ArrayElementJsNode;
	arrayLength: ArrayLengthJsNode;
	asin: AsinJsNode;
	atan: AtanJsNode;
	attribute: AttributeJsNode;
	boolToInt: BoolToIntJsNode;
	box3: Box3JsNode;
	catmullRomCurve3GetPoint: CatmullRomCurve3GetPointJsNode;
	ceil: CeilJsNode;
	clamp: ClampJsNode;
	compare: CompareJsNode;
	complement: ComplementJsNode;
	cos: CosJsNode;
	cross: CrossJsNode;
	cursor: CursorJsNode;
	colorToVec3: ColorToVec3JsNode;
	constant: ConstantJsNode;
	debug: DebugJsNode;
	dot: DotJsNode;
	distance: DistanceJsNode;
	divide: DivideJsNode;
	easing: EasingJsNode;
	elementsToArray: ElementsToArrayJsNode;
	fit: FitJsNode;
	floatToColor: FloatToColorJsNode;
	floatToInt: FloatToIntJsNode;
	floatToVec2: FloatToVec2JsNode;
	floatToVec3: FloatToVec3JsNode;
	floatToVec4: FloatToVec4JsNode;
	floor: FloorJsNode;
	getBox3Property: GetBox3PropertyJsNode;
	getMaterial: GetMaterialJsNode;
	getObject: GetObjectJsNode;
	getObjectAttribute: GetObjectAttributeJsNode;
	getObjectProperty: GetObjectPropertyJsNode;
	getObjectUserData: GetObjectUserDataJsNode;
	getParent: GetParentJsNode;
	getPlaneProperty: GetPlanePropertyJsNode;
	getPhysicsRBDCapsuleProperty: GetPhysicsRBDCapsulePropertyJsNode;
	getPhysicsRBDConeProperty: GetPhysicsRBDConePropertyJsNode;
	getPhysicsRBDCylinderProperty: GetPhysicsRBDCylinderPropertyJsNode;
	getPhysicsRBDCuboidProperty: GetPhysicsRBDCuboidPropertyJsNode;
	getPhysicsRBDSphereProperty: GetPhysicsRBDSpherePropertyJsNode;
	getPhysicsRBDProperty: GetPhysicsRBDPropertyJsNode;
	getRayProperty: GetRayPropertyJsNode;
	getSphereProperty: GetSpherePropertyJsNode;
	getTexture: GetTextureJsNode;
	getTrackedHandProperty: GetTrackedHandPropertyJsNode;
	getWebXRTrackedMarkerProperty: GetWebXRTrackedMarkerPropertyJsNode;
	globals: GlobalsJsNode;
	intToBool: IntToBoolJsNode;
	intToFloat: IntToFloatJsNode;
	length: LengthJsNode;
	manhattanDistance: ManhattanDistanceJsNode;
	max: MaxJsNode;
	maxLength: MaxLengthJsNode;
	min: MinJsNode;
	mix: MixJsNode;
	mult: MultJsNode;
	multAdd: MultAddJsNode;
	multScalar: MultScalarJsNode;
	nearestPosition: NearestPositionJsNode;
	negate: NegateJsNode;
	normalize: NormalizeJsNode;
	null: NullJsNode;
	onKeydown: OnKeydownJsNode;
	onKeypress: OnKeypressJsNode;
	onKeyup: OnKeyupJsNode;
	onManualTrigger: OnManualTriggerJsNode;
	onMapboxCameraMove: OnMapboxCameraMoveJsNode;
	onMapboxCameraMoveEnd: OnMapboxCameraMoveEndJsNode;
	onMapboxCameraMoveStart: OnMapboxCameraMoveStartJsNode;
	onObjectAttributeUpdate: OnObjectAttributeUpdateJsNode;
	onObjectClick: OnObjectClickJsNode;
	onObjectHover: OnObjectHoverJsNode;
	onPerformanceChange: OnPerformanceChangeJsNode;
	onScenePause: OnScenePauseJsNode;
	onScenePlay: OnScenePlayJsNode;
	onSceneReset: OnSceneResetJsNode;
	onTick: OnTickJsNode;
	or: OrJsNode;
	output: OutputJsNode;
	param: ParamJsNode;
	particlesSystemReset: ParticlesSystemResetJsNode;
	particlesSystemStepSimulation: ParticlesSystemStepSimulationJsNode;
	physicsRBDAddForce: PhysicsRBDAddForceJsNode;
	physicsRBDAddForceAtPoint: PhysicsRBDAddForceAtPointJsNode;
	physicsRBDAddTorque: PhysicsRBDAddTorqueJsNode;
	physicsRBDApplyImpulse: PhysicsRBDApplyImpulseJsNode;
	physicsRBDApplyTorqueImpulse: PhysicsRBDApplyTorqueImpulseJsNode;
	physicsRBDApplyImpulseAtPoint: PhysicsRBDApplyImpulseAtPointJsNode;
	physicsRBDRemove: PhysicsRBDRemoveJsNode;
	physicsRBDResetAll: PhysicsRBDResetAllJsNode;
	physicsRBDResetForces: PhysicsRBDResetForcesJsNode;
	physicsRBDResetTorques: PhysicsRBDResetTorquesJsNode;
	physicsWorldReset: PhysicsWorldResetJsNode;
	physicsWorldStepSimulation: PhysicsWorldStepSimulationJsNode;
	plane: PlaneJsNode;
	pow: PowJsNode;
	rand: RandJsNode;
	random: RandomJsNode;
	ray: RayJsNode;
	rayFromCamera: RayFromCameraJsNode;
	rayFromCursor: RayFromCursorJsNode;
	rayIntersectBox: RayIntersectBoxJsNode;
	rayIntersectsBox: RayIntersectsBoxJsNode;
	rayIntersectObject: RayIntersectObjectJsNode;
	rayIntersectsObject: RayIntersectsObjectJsNode;
	rayDistanceToPlane: RayDistanceToPlaneJsNode;
	rayIntersectPlane: RayIntersectPlaneJsNode;
	rayIntersectsPlane: RayIntersectsPlaneJsNode;
	rayIntersectSphere: RayIntersectSphereJsNode;
	rayIntersectsSphere: RayIntersectsSphereJsNode;
	round: RoundJsNode;
	SDF2DRoundedX: SDF2DRoundedXJsNode;
	SDFBox: SDFBoxJsNode;
	SDFIntersect: SDFIntersectJsNode;
	SDFRevolution: SDFRevolutionJsNode;
	SDFSphere: SDFSphereJsNode;
	SDFSubtract: SDFSubtractJsNode;
	SDFUnion: SDFUnionJsNode;
	setGeometryPositions: SetGeometryPositionsJsNode;
	setMaterialColor: SetMaterialColorJsNode;
	setMaterialEmissiveColor: SetMaterialEmissiveColorJsNode;
	setMaterialOpacity: SetMaterialOpacityJsNode;
	setMaterialUniform: SetMaterialUniformJsNode;
	setObjectAttribute: SetObjectAttributeJsNode;
	setObjectCastShadow: SetObjectCastShadowJsNode;
	setObjectFrustumCulled: SetObjectFrustumCulledJsNode;
	setObjectLookAt: SetObjectLookAtJsNode;
	setObjectMaterial: SetObjectMaterialJsNode;
	setObjectMaterialColor: SetObjectMaterialColorJsNode;
	setObjectMatrix: SetObjectMatrixJsNode;
	setObjectMatrixAutoUpdate: SetObjectMatrixAutoUpdateJsNode;
	setObjectPosition: SetObjectPositionJsNode;
	setObjectPolarTransform: SetObjectPolarTransformJsNode;
	setObjectRotation: SetObjectRotationJsNode;
	setObjectReceiveShadow: SetObjectReceiveShadowJsNode;
	setObjectScale: SetObjectScaleJsNode;
	setObjectVisible: SetObjectVisibleJsNode;
	setPerspectiveCameraFovJsNode: SetPerspectiveCameraFovJsNode;
	setPerspectiveCameraNearFarJsNode: SetPerspectiveCameraNearFarJsNode;
	setPhysicsRBDAngularVelocity: SetPhysicsRBDAngularVelocityJsNode;
	setPhysicsRBDLinearVelocity: SetPhysicsRBDLinearVelocityJsNode;
	setPhysicsRBDPosition: SetPhysicsRBDPositionJsNode;
	setPhysicsRBDRotation: SetPhysicsRBDRotationJsNode;
	setPhysicsRBDCapsuleProperty: SetPhysicsRBDCapsulePropertyJsNode;
	setPhysicsRBDConeProperty: SetPhysicsRBDConePropertyJsNode;
	setPhysicsRBDCylinderProperty: SetPhysicsRBDCylinderPropertyJsNode;
	setPhysicsRBDCuboidProperty: SetPhysicsRBDCuboidPropertyJsNode;
	setPhysicsRBDSphereProperty: SetPhysicsRBDSpherePropertyJsNode;
	setPhysicsWorldGravity: SetPhysicsWorldGravityJsNode;
	setSpotLightIntensity: SetSpotLightIntensityJsNode;
	sign: SignJsNode;
	sin: SinJsNode;
	smoothstep: SmoothstepJsNode;
	sphere: SphereJsNode;
	sqrt: SqrtJsNode;
	subtract: SubtractJsNode;
	switch: SwitchJsNode;
	tan: TanJsNode;
	trackFace: TrackFaceJsNode;
	trackHand: TrackHandJsNode;
	vector3AngleTo: Vector3AngleToJsNode;
	vector3Project: Vector3ProjectJsNode;
	vector3ProjectOnPlane: Vector3ProjectOnPlaneJsNode;
	vector3Unproject: Vector3UnprojectJsNode;
	twoWaySwitch: TwoWaySwitchJsNode;
	vec2ToFloat: Vec2ToFloatJsNode;
	vec2ToVec3: Vec2ToVec3JsNode;
	vec3ToColor: Vec3ToColorJsNode;
	vec3ToFloat: Vec3ToFloatJsNode;
	vec3ToVec2: Vec3ToVec2JsNode;
	vec3ToVec4: Vec3ToVec4JsNode;
	vec4ToFloat: Vec4ToFloatJsNode;
	vec4ToVec3: Vec4ToVec3JsNode;
}

import {PolyEngine} from '../../../Poly';
import {SopType} from './types/Sop';
import {NodeContext} from '../../NodeContext';
const sopType = (type: SopType) => `${NodeContext.SOP}/${type}`;
const ONLY_WITH_GLOBALS = {only: [sopType(SopType.SDF_BUILDER)]};
const ONLY_ACTOR = {only: [sopType(SopType.ACTOR_JS), sopType(SopType.PHYSICS_WORLD)]};
export class JsRegister {
	static run(poly: PolyEngine) {
		// poly.registerNode(AttributeJsNode, CATEGORY_JS.GLOBALS);
		poly.registerNode(AbsJsNode, CATEGORY_JS.MATH);
		poly.registerNode(AcosJsNode, CATEGORY_JS.MATH);
		poly.registerNode(AddJsNode, CATEGORY_JS.MATH);
		poly.registerNode(AndJsNode, CATEGORY_JS.LOGIC);
		poly.registerNode(AnimationActionJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationActionCrossFadeJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationActionFadeOutJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationActionFadeInJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationActionPlayJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationActionStopJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationMixerJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);
		poly.registerNode(AnimationMixerUpdateJsNode, CATEGORY_JS.ANIMATION, ONLY_ACTOR);

		poly.registerNode(ArrayElementJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(ArrayLengthJsNode, CATEGORY_JS.LOGIC);

		poly.registerNode(AsinJsNode, CATEGORY_JS.MATH);
		poly.registerNode(AtanJsNode, CATEGORY_JS.MATH);
		poly.registerNode(BoolToIntJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Box3JsNode, CATEGORY_JS.MATH);
		poly.registerNode(CatmullRomCurve3GetPointJsNode, CATEGORY_JS.MATH);
		poly.registerNode(CeilJsNode, CATEGORY_JS.MATH);
		poly.registerNode(ClampJsNode, CATEGORY_JS.MATH);
		poly.registerNode(ColorToVec3JsNode, CATEGORY_JS.CONVERSION);

		poly.registerNode(CompareJsNode, CATEGORY_JS.LOGIC);
		poly.registerNode(ComplementJsNode, CATEGORY_JS.MATH);

		poly.registerNode(ConstantJsNode, CATEGORY_JS.GLOBALS);
		poly.registerNode(CosJsNode, CATEGORY_JS.MATH);
		poly.registerNode(CrossJsNode, CATEGORY_JS.MATH);
		poly.registerNode(CursorJsNode, CATEGORY_JS.INPUTS, ONLY_ACTOR);

		poly.registerNode(DebugJsNode, CATEGORY_JS.FLOW);
		poly.registerNode(DistanceJsNode, CATEGORY_JS.MATH);
		poly.registerNode(DivideJsNode, CATEGORY_JS.MATH);
		poly.registerNode(DotJsNode, CATEGORY_JS.MATH);
		poly.registerNode(EasingJsNode, CATEGORY_JS.MATH);

		poly.registerNode(ElementsToArrayJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FitJsNode, CATEGORY_JS.MATH);
		poly.registerNode(FloatToColorJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FloatToIntJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FloatToVec2JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FloatToVec3JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FloatToVec4JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(FloorJsNode, CATEGORY_JS.MATH);
		poly.registerNode(GetBox3PropertyJsNode, CATEGORY_JS.MATH);
		poly.registerNode(GetMaterialJsNode, CATEGORY_JS.GET);
		poly.registerNode(GetObjectJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetObjectAttributeJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetObjectPropertyJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetObjectUserDataJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetParentJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetPlanePropertyJsNode, CATEGORY_JS.MATH);
		poly.registerNode(GetPhysicsRBDCapsulePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetPhysicsRBDConePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetPhysicsRBDCylinderPropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetPhysicsRBDCuboidPropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetPhysicsRBDSpherePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetPhysicsRBDPropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(GetRayPropertyJsNode, CATEGORY_JS.MATH);
		poly.registerNode(GetSpherePropertyJsNode, CATEGORY_JS.MATH);
		poly.registerNode(GetTextureJsNode, CATEGORY_JS.GET, ONLY_ACTOR);
		poly.registerNode(GetTrackedHandPropertyJsNode, CATEGORY_JS.COMPUTER_VISION, ONLY_ACTOR);
		poly.registerNode(GetWebXRTrackedMarkerPropertyJsNode, CATEGORY_JS.WEBXR, ONLY_ACTOR);

		poly.registerNode(GlobalsJsNode, CATEGORY_JS.GLOBALS, ONLY_WITH_GLOBALS);
		poly.registerNode(IntToBoolJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(IntToFloatJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(LengthJsNode, CATEGORY_JS.MATH);
		poly.registerNode(ManhattanDistanceJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MaxJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MaxLengthJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MinJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MixJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MultJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MultAddJsNode, CATEGORY_JS.MATH);
		poly.registerNode(MultScalarJsNode, CATEGORY_JS.MATH);
		poly.registerNode(NearestPositionJsNode, CATEGORY_JS.MATH);
		poly.registerNode(NegateJsNode, CATEGORY_JS.MATH);
		poly.registerNode(NormalizeJsNode, CATEGORY_JS.MATH);
		poly.registerNode(NullJsNode, CATEGORY_JS.FLOW);

		poly.registerNode(OnKeydownJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnKeypressJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnKeyupJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnManualTriggerJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnMapboxCameraMoveJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnMapboxCameraMoveEndJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnMapboxCameraMoveStartJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnObjectAttributeUpdateJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnObjectClickJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnObjectHoverJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnPerformanceChangeJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnScenePauseJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnScenePlayJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnSceneResetJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OnTickJsNode, CATEGORY_JS.EVENTS, ONLY_ACTOR);
		poly.registerNode(OrJsNode, CATEGORY_JS.LOGIC);
		poly.registerNode(OutputJsNode, CATEGORY_JS.GLOBALS, ONLY_WITH_GLOBALS);
		poly.registerNode(ParamJsNode, CATEGORY_JS.GLOBALS);
		poly.registerNode(ParticlesSystemResetJsNode, CATEGORY_JS.PARTICLES);
		poly.registerNode(ParticlesSystemStepSimulationJsNode, CATEGORY_JS.PARTICLES);

		poly.registerNode(PhysicsRBDAddForceJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDAddForceAtPointJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDAddTorqueJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDApplyImpulseJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDApplyTorqueImpulseJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDApplyImpulseAtPointJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDRemoveJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDResetAllJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDResetForcesJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsRBDResetTorquesJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);

		poly.registerNode(PhysicsWorldResetJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PhysicsWorldStepSimulationJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(PlaneJsNode, CATEGORY_JS.MATH);
		poly.registerNode(PowJsNode, CATEGORY_JS.MATH);

		poly.registerNode(RandJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RandomJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayFromCameraJsNode, CATEGORY_JS.INPUTS);
		poly.registerNode(RayFromCursorJsNode, CATEGORY_JS.INPUTS);
		poly.registerNode(RayIntersectBoxJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectsBoxJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectObjectJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectsObjectJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayDistanceToPlaneJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectPlaneJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectsPlaneJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectSphereJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RayIntersectsSphereJsNode, CATEGORY_JS.MATH);
		poly.registerNode(RoundJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SDF2DRoundedXJsNode, CATEGORY_JS.SDF_PRIMITIVES_2D);
		poly.registerNode(SDFBoxJsNode, CATEGORY_JS.SDF_PRIMITIVES);
		poly.registerNode(SDFIntersectJsNode, CATEGORY_JS.SDF_MODIFIERS);
		poly.registerNode(SDFRevolutionJsNode, CATEGORY_JS.SDF_MODIFIERS);
		poly.registerNode(SDFSphereJsNode, CATEGORY_JS.SDF_PRIMITIVES);
		poly.registerNode(SDFSubtractJsNode, CATEGORY_JS.SDF_MODIFIERS);
		poly.registerNode(SDFUnionJsNode, CATEGORY_JS.SDF_MODIFIERS);

		poly.registerNode(SetGeometryPositionsJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetMaterialColorJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetMaterialEmissiveColorJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetMaterialOpacityJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetMaterialUniformJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectAttributeJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectCastShadowJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectFrustumCulledJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectLookAtJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectMaterialJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectMaterialColorJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectMatrixJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectMatrixAutoUpdateJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectPositionJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectPolarTransformJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectReceiveShadowJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectRotationJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectScaleJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetObjectVisibleJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetPerspectiveCameraFovJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetPerspectiveCameraNearFarJsNode, CATEGORY_JS.ACTION, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDAngularVelocityJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDLinearVelocityJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDPositionJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDRotationJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDCapsulePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDConePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDCylinderPropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDCuboidPropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsRBDSpherePropertyJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetPhysicsWorldGravityJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);
		poly.registerNode(SetSpotLightIntensityJsNode, CATEGORY_JS.PHYSICS, ONLY_ACTOR);

		poly.registerNode(SignJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SinJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SmoothstepJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SphereJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SqrtJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SubtractJsNode, CATEGORY_JS.MATH);
		poly.registerNode(SwitchJsNode, CATEGORY_JS.LOGIC);
		poly.registerNode(TanJsNode, CATEGORY_JS.MATH);
		poly.registerNode(TrackFaceJsNode, CATEGORY_JS.COMPUTER_VISION);
		poly.registerNode(TrackHandJsNode, CATEGORY_JS.COMPUTER_VISION);
		poly.registerNode(TwoWaySwitchJsNode, CATEGORY_JS.LOGIC);

		poly.registerNode(Vector3AngleToJsNode, CATEGORY_JS.MATH);
		poly.registerNode(Vector3ProjectJsNode, CATEGORY_JS.MATH);
		poly.registerNode(Vector3ProjectOnPlaneJsNode, CATEGORY_JS.MATH);
		poly.registerNode(Vector3UnprojectJsNode, CATEGORY_JS.MATH);

		poly.registerNode(Vec2ToFloatJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec2ToVec3JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec3ToFloatJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec3ToColorJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec3ToVec2JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec3ToVec4JsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec4ToFloatJsNode, CATEGORY_JS.CONVERSION);
		poly.registerNode(Vec4ToVec3JsNode, CATEGORY_JS.CONVERSION);
	}
}
