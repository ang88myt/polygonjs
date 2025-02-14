import type {QUnit} from '../../../helpers/QUnit';
import {CoreSleep} from '../../../../src/core/Sleep';
import {TwoWaySwitchJsNodeInputName} from '../../../../src/engine/nodes/js/TwoWaySwitch';
import {JsConnectionPointType} from '../../../../src/engine/nodes/utils/io/connections/Js';
import {RendererUtils} from '../../../helpers/RendererUtils';
export function testenginenodesjsRayIntersectsObject(qUnit: QUnit) {

qUnit.test('js/rayIntersectsObject', async (assert) => {
	const scene = window.scene;
	const perspective_camera1 = window.perspective_camera1;

	perspective_camera1.p.t.set([0, 0, 5]);

	const geo1 = window.geo1;
	const box1 = geo1.createNode('box');
	const actor1 = geo1.createNode('actor');

	actor1.setInput(0, box1);
	actor1.flags.display.set(true);
	actor1.io.inputs.overrideClonedState(true);

	const onTick = actor1.createNode('onTick');
	const setObjectPosition1 = actor1.createNode('setObjectPosition');
	const rayIntersectsObject1 = actor1.createNode('rayIntersectsObject');
	const ray1 = actor1.createNode('ray');
	const twoWaySwitch1 = actor1.createNode('twoWaySwitch');
	const constant1 = actor1.createNode('constant');
	const constant2 = actor1.createNode('constant');

	setObjectPosition1.setInput(JsConnectionPointType.TRIGGER, onTick);
	setObjectPosition1.setInput('position', twoWaySwitch1);
	rayIntersectsObject1.setInput(JsConnectionPointType.RAY, ray1);
	twoWaySwitch1.setInput(TwoWaySwitchJsNodeInputName.CONDITION, rayIntersectsObject1);
	twoWaySwitch1.setInput(TwoWaySwitchJsNodeInputName.IF_TRUE, constant1);
	twoWaySwitch1.setInput(TwoWaySwitchJsNodeInputName.IF_FALSE, constant2);

	constant1.setJsType(JsConnectionPointType.VECTOR3);
	constant2.setJsType(JsConnectionPointType.VECTOR3);
	constant1.p.vector3.set([0, 0, 1]);
	constant2.p.vector3.set([0, 0, -1]);

	const container = await actor1.compute();
	const object = container.coreContent()!.threejsObjects()[0];

	// wait to make sure objects are mounted to the scene
	await CoreSleep.sleep(150);

	await RendererUtils.withViewer({cameraNode: perspective_camera1}, async (args) => {
		scene.play();
		assert.equal(scene.time(), 0);
		assert.deepEqual(object.position.toArray(), [0, 0, 0], 'position 0');

		await CoreSleep.sleep(50);
		assert.deepEqual(object.position.toArray(), [0, 0, -1], 'pos set');

		ray1.p.origin.set([0, 0, -5]);
		await CoreSleep.sleep(50);
		assert.deepEqual(object.position.toArray(), [0, 0, 1], 'pos set');

		ray1.p.origin.set([0, -5, -5]);
		await CoreSleep.sleep(50);
		assert.deepEqual(object.position.toArray(), [0, 0, -1], 'pos set');

		ray1.p.origin.set([0, 0, -5]);
		await CoreSleep.sleep(50);
		assert.deepEqual(object.position.toArray(), [0, 0, 1], 'pos set');
	});
});

}