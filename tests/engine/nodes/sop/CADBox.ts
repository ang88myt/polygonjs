import type {QUnit} from '../../../helpers/QUnit';
import {BooleanCadOperationType} from '../../../../src/engine/nodes/sop/CADBoolean';
import {BufferAttribute, Box3} from 'three';
export function testenginenodessopCADBox(qUnit: QUnit) {
const tmpBox = new Box3();

qUnit.test('sop/CADBox simple', async (assert) => {
	const geo1 = window.geo1;
	geo1.flags.display.set(false); // cancels geo node displayNodeController

	const box1 = geo1.createNode('CADBox');
	const sphere1 = geo1.createNode('CADSphere');
	const boolean1 = geo1.createNode('CADBoolean');
	const CADTriangulate1 = geo1.createNode('CADTriangulate');

	boolean1.setInput(0, sphere1);
	boolean1.setInput(1, box1);
	box1.p.sizes.set([2.9, 0.6, 0.6]);
	boolean1.flags.display.set(true);
	boolean1.setOperation(BooleanCadOperationType.SUBTRACT);
	CADTriangulate1.setInput(0, boolean1);

	async function computeBoolean() {
		const container = await boolean1.compute();
		const coreGroup = container.coreContent()!;
		const allObjectsCount = coreGroup.allObjects().length;
		const threejsObjectsCount = coreGroup.threejsObjects().length;

		container.boundingBox(tmpBox);

		return {allObjectsCount, threejsObjectsCount};
	}
	async function computeTriangulate() {
		const container = await CADTriangulate1.compute();
		const coreGroup = container.coreContent()!;
		const allObjectsCount = coreGroup.allObjects().length;
		const threejsObjectsCount = coreGroup.threejsObjects().length;

		const geometry = coreGroup?.threejsObjectsWithGeo()[0].geometry;

		container.boundingBox(tmpBox);

		return {allObjectsCount, threejsObjectsCount, geometry};
	}

	await computeBoolean();
	assert.in_delta(tmpBox.min.y, -1, 0.01);

	assert.equal(
		((await computeTriangulate()).geometry.getAttribute('position') as BufferAttribute).array.length,
		12348
	);
	assert.equal(tmpBox.min.y, -1);

	box1.p.sizes.set([2.9, 4.6, 1.6]);

	await computeTriangulate();
	assert.in_delta(tmpBox.min.y, -0.6, 0.01);
});

}