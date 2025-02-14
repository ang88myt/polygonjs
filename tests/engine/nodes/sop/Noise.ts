import type {QUnit} from '../../../helpers/QUnit';
import {NoiseOperation} from '../../../../src/engine/nodes/sop/Noise';
import {BufferAttribute, Box3} from 'three';
export function testenginenodessopNoise(qUnit: QUnit) {
const tmpBox = new Box3();

qUnit.test('noise simple', async (assert) => {
	const geo1 = window.geo1;

	const sphere1 = geo1.createNode('sphere');
	sphere1.p.resolution.set([8, 6]);
	const noise1 = geo1.createNode('noise');
	noise1.setInput(0, sphere1);
	noise1.p.useNormals.set(1);

	let container = await noise1.compute();
	// const core_group = container.coreContent();
	// const {geometry} = core_group.objects()[0];
	container.boundingBox(tmpBox);
	assert.in_delta(tmpBox.max.y, 1.3, 0.1);
	assert.in_delta(tmpBox.min.y, -1.3, 0.1);
});

qUnit.test('noise to update a float attribute', async (assert) => {
	const geo1 = window.geo1;

	const sphere1 = geo1.createNode('sphere');
	sphere1.p.resolution.set([8, 6]);
	const scatter = geo1.createNode('scatter');
	scatter.setInput(0, sphere1);
	scatter.p.pointsCount.set(4);
	const noise1 = geo1.createNode('noise');
	noise1.setInput(0, scatter);
	noise1.p.attribName.set('mass');

	let coreContent = (await noise1.compute()).coreContent();
	assert.equal(noise1.states.error.message(), 'attribute mass not found');

	const attribCreate = geo1.createNode('attribCreate');
	attribCreate.p.name.set('mass');
	attribCreate.setInput(0, scatter);
	attribCreate.p.value1.set(1);
	noise1.setInput(0, attribCreate);

	noise1.setOperation(NoiseOperation.SET);
	coreContent = (await noise1.compute()).coreContent();
	assert.notOk(noise1.states.error.active());
	let massAttribArray = (coreContent?.threejsObjectsWithGeo()[0].geometry.getAttribute('mass') as BufferAttribute)
		.array!;
	assert.in_delta(massAttribArray[0], 0.16, 0.01);
	assert.in_delta(massAttribArray[1], -0.01, 0.01);
	assert.in_delta(massAttribArray[2], 0.02, 0.01);
	assert.in_delta(massAttribArray[3], 0.16, 0.01);

	noise1.setOperation(NoiseOperation.ADD);
	coreContent = (await noise1.compute()).coreContent();
	assert.notOk(noise1.states.error.active());
	massAttribArray = (coreContent?.threejsObjectsWithGeo()[0].geometry.getAttribute('mass') as BufferAttribute).array!;
	assert.in_delta(massAttribArray[0], 1 + 0.16, 0.01);
	assert.in_delta(massAttribArray[1], 1 - 0.01, 0.01);
	assert.in_delta(massAttribArray[2], 1 + 0.02, 0.01);
	assert.in_delta(massAttribArray[3], 1 + 0.16, 0.01);
});

qUnit.test('noise without rest and no input cloning', async (assert) => {
	const scene = window.scene;
	const geo1 = window.geo1;

	const sphere1 = geo1.createNode('sphere');
	const noise1 = geo1.createNode('noise');
	noise1.setInput(0, sphere1);
	sphere1.p.resolution.set([8, 6]);
	noise1.io.inputs.overrideClonedState(true);
	noise1.p.useNormals.set(1);
	noise1.p.useRestAttributes.set(false);
	noise1.p.offset.y.set('$T');

	let container = await noise1.compute();
	// const core_group = container.coreContent();
	// const {geometry} = core_group.objects()[0];
	container.boundingBox(tmpBox);
	assert.in_delta(tmpBox.max.y, 1.3, 0.1);
	assert.in_delta(tmpBox.min.y, -1.3, 0.1);
	for (let i = 0; i < 1000; i++) {
		scene.setFrame(i);
		container = await noise1.compute();
	}
	container.boundingBox(tmpBox);
	assert.in_delta(tmpBox.max.y, 10.17, 0.1);
	assert.in_delta(tmpBox.min.y, -13.46, 0.1);
});

qUnit.test('noise with rest and no input cloning', async (assert) => {
	const scene = window.scene;
	const geo1 = window.geo1;

	const sphere1 = geo1.createNode('sphere');
	const restAttributes1 = geo1.createNode('restAttributes');
	const noise1 = geo1.createNode('noise');
	restAttributes1.setInput(0, sphere1);
	noise1.setInput(0, restAttributes1);
	sphere1.p.resolution.set([8, 6]);
	noise1.io.inputs.overrideClonedState(true);
	noise1.p.useNormals.set(1);
	noise1.p.useRestAttributes.set(true);
	noise1.p.offset.y.set('$T');

	let container = await noise1.compute();
	// const core_group = container.coreContent();
	// const {geometry} = core_group.objects()[0];

	container.boundingBox(tmpBox);
	assert.in_delta(tmpBox.max.y, 1.3, 0.1);
	assert.in_delta(tmpBox.min.y, -1.3, 0.1);
	for (let i = 0; i < 1000; i++) {
		scene.setFrame(i);
		container = await noise1.compute();
	}
	container.boundingBox(tmpBox);
	assert.in_delta(tmpBox.max.y, 1.3, 0.1);
	assert.in_delta(tmpBox.min.y, -1.3, 0.1);
});

qUnit.skip('noise on flamingo', (assert) => {
	// load example flamingo glb
	assert.equal(0, 1);
});

}