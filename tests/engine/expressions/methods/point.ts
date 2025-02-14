import type {QUnit} from '../../../helpers/QUnit';
import {BufferAttribute} from 'three';
import {SceneJsonExporter} from '../../../../src/engine/io/json/export/Scene';
import {SceneJsonImporter} from '../../../../src/engine/io/json/import/Scene';
import {PointSopNode} from '../../../../src/engine/nodes/sop/Point';
export function testengineexpressionsmethodspoint(qUnit: QUnit) {

qUnit.test('expression points works with path', async (assert) => {
	const geo1 = window.geo1;

	const plane1 = geo1.createNode('plane');
	const attrib_create1 = geo1.createNode('attribCreate');
	const attrib_create2 = geo1.createNode('attribCreate');

	attrib_create1.setInput(0, plane1);
	attrib_create2.setInput(0, attrib_create1);

	attrib_create1.p.name.set('h');
	attrib_create1.p.value1.set('@ptnum');

	attrib_create2.p.name.set('t');
	attrib_create2.p.value1.set('point("../attribCreate1", "h", 2)');

	const container = await attrib_create2.compute();
	const array = (container.coreContent()!.threejsObjectsWithGeo()[0].geometry.attributes['t'] as BufferAttribute)
		.array as number[];
	assert.deepEqual(array.join(','), [2, 2, 2, 2].join(','));
});

qUnit.test('expression points works with input index', async (assert) => {
	const geo1 = window.geo1;

	const plane1 = geo1.createNode('plane');
	const attrib_create1 = geo1.createNode('attribCreate');
	const attrib_create2 = geo1.createNode('attribCreate');

	attrib_create1.setInput(0, plane1);
	attrib_create2.setInput(0, attrib_create1);

	attrib_create1.p.name.set('h');
	attrib_create1.p.value1.set('@ptnum');

	attrib_create2.p.name.set('t');
	attrib_create2.p.value1.set('point(0, "h", 2)');

	const container = await attrib_create2.compute();
	const array = (container.coreContent()!.threejsObjectsWithGeo()[0].geometry.attributes['t'] as BufferAttribute)
		.array as number[];
	assert.deepEqual(array.join(','), [2, 2, 2, 2].join(','));
});

qUnit.test('expression points works in a point sop on scene load', async (assert) => {
	const geo1 = window.geo1;
	const scene = window.scene;

	const line1 = geo1.createNode('line');
	const point1 = geo1.createNode('point');

	point1.setInput(0, line1);

	point1.p.updateY.set(1);
	point1.p.y.set("(point(0, 'P', 0).y + point(0, 'P', 1).y) * 0.5");

	let container = await point1.compute();
	assert.notOk(point1.states.error.active());
	let geometry = container.coreContent()!.threejsObjectsWithGeo()[0].geometry;
	let positions = (geometry.getAttribute('position') as BufferAttribute).array as number[];
	assert.deepEqual(positions.join(','), [0, 0.5, 0, 0, 0.5, 0].join(','));

	const data = await new SceneJsonExporter(scene).data();

	// console.log('************ LOAD **************');
	const scene2 = await SceneJsonImporter.loadData(data);
	await scene2.waitForCooksCompleted();
	const point2 = scene2.node(point1.path()) as PointSopNode;
	container = await point2.compute();
	assert.notOk(point2.states.error.active());
	geometry = container.coreContent()!.threejsObjectsWithGeo()[0].geometry;
	positions = (geometry.getAttribute('position') as BufferAttribute).array as number[];
	assert.deepEqual(positions.join(','), [0, 0.5, 0, 0, 0.5, 0].join(','));
});

}