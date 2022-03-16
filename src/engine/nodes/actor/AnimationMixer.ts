/**
 * create an animation mixer from an object that contains animation tracks
 *
 *
 */

import {ActorNodeTriggerContext, TypedActorNode} from './_Base';
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {
	ActorConnectionPoint,
	ActorConnectionPointType,
	ACTOR_CONNECTION_POINT_IN_NODE_DEF,
} from '../utils/io/connections/Actor';
import {AnimationMixer} from 'three/src/animation/AnimationMixer';
import {AnimationAction} from 'three/src/animation/AnimationAction';
import {AnimationClip} from 'three/src/animation/AnimationClip';
import {Object3D} from 'three/src/core/Object3D';
import {ArrayUtils} from '../../../core/ArrayUtils';

const CONNECTION_OPTIONS = ACTOR_CONNECTION_POINT_IN_NODE_DEF;

export function animationClipsFromAnimationMixer(animationMixer: AnimationMixer): AnimationClip[] {
	const root = animationMixer.getRoot();
	const animations = (root as Object3D).animations;
	if (!animations) {
		return [];
	}
	return animations;
	// return ArrayUtils.compact(animations.map((animation) => animationMixer.existingAction(animation)));
}

export function existingAnimationActionsFromAnimationMixer(animationMixer: AnimationMixer): AnimationAction[] {
	const root = animationMixer.getRoot();
	const animations = (root as Object3D).animations;
	if (!animations) {
		return [];
	}
	return ArrayUtils.compact(animations.map((animation) => animationMixer.existingAction(animation)));
}

class AnimationMixerActorParamsConfig extends NodeParamsConfig {
	// time = ParamConfig.FLOAT(0);
	// timeScale = ParamConfig.FLOAT(1);
}
const ParamsConfig = new AnimationMixerActorParamsConfig();

export class AnimationMixerActorNode extends TypedActorNode<AnimationMixerActorParamsConfig> {
	override readonly paramsConfig = ParamsConfig;
	static override type() {
		return 'animationMixer';
	}

	override dispose(): void {
		super.dispose();
		this._mixerByObject.clear();
	}

	static readonly OUTPUT_NAME = 'val';
	override initializeNode() {
		this.io.inputs.setNamedInputConnectionPoints([
			// new ActorConnectionPoint(TRIGGER_CONNECTION_NAME, ActorConnectionPointType.TRIGGER, CONNECTION_OPTIONS),
			new ActorConnectionPoint(
				ActorConnectionPointType.OBJECT_3D,
				ActorConnectionPointType.OBJECT_3D,
				CONNECTION_OPTIONS
			),
		]);

		this.io.outputs.setNamedOutputConnectionPoints([
			new ActorConnectionPoint(
				ActorConnectionPointType.ANIMATION_MIXER,
				ActorConnectionPointType.ANIMATION_MIXER
			),
		]);
	}

	private _mixerByObject: Map<Object3D, AnimationMixer> = new Map();
	public override outputValue(context: ActorNodeTriggerContext) {
		const {Object3D} = context;
		let animationMixer = this._mixerByObject.get(Object3D);
		if (!animationMixer) {
			animationMixer = new AnimationMixer(Object3D);
			this._mixerByObject.set(Object3D, animationMixer);

			// const root = animationMixer.getRoot();
			// const animations = (root as Object3D).animations;
			// if (!animations) {
			// 	return -1;
			// }
			// for (let animation of animations) {
			// 	const action = animationMixer.clipAction(animation);
			// 	// action.enabled = true;
			// 	// action.setEffectiveTimeScale(1);
			// 	// action.setEffectiveWeight(1);
			// 	// console.log('create action', action);
			// 	action.play();
			// }
		}
		return animationMixer;
	}
}
