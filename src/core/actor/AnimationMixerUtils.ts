import {Object3D} from 'three/src/core/Object3D';
import {AnimationAction} from 'three/src/animation/AnimationAction';
import {AnimationClip} from 'three/src/animation/AnimationClip';
import {AnimationMixer} from 'three/src/animation/AnimationMixer';
import {ArrayUtils} from '../ArrayUtils';

export function animationClipsFromAnimationMixer(animationMixer: AnimationMixer): AnimationClip[] | undefined {
	const root = animationMixer.getRoot();
	return (root as Object3D).animations;
}

export function existingAnimationActionsFromAnimationMixer(animationMixer: AnimationMixer): AnimationAction[] {
	const root = animationMixer.getRoot();
	const animations = (root as Object3D).animations;
	if (!animations) {
		return [];
	}
	const animationActions: AnimationAction[] = [];
	for (let animation of animations) {
		const existingAnimationAction = animationMixer.existingAction(animation);
		if (existingAnimationAction) {
			animationActions.push(existingAnimationAction);
		}
	}
	return animationActions;
}

export function getMostActiveAnimationActionFromMixer(animationMixer: AnimationMixer, except?: AnimationAction) {
	const otherActions = existingAnimationActionsFromAnimationMixer(animationMixer).filter(
		(action) => action !== except
	);
	const actionsSortedByWeight = ArrayUtils.sortBy(otherActions, (action) => -action.getEffectiveWeight());
	const mostActiveAnimationAction = actionsSortedByWeight[0];
	return {
		otherActions,
		mostActiveAnimationAction,
	};
}
