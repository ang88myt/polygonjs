import type {QUnit} from '../../../helpers/QUnit';
import {BufferAttribute} from 'three';
import {ASSETS_ROOT} from '../../../../src/core/loader/AssetsUtils';
import {DataType, DATA_TYPES} from '../../../../src/engine/nodes/sop/DataUrl';
export function _dataUrlUrl(path: string) {
	return `${ASSETS_ROOT}nodes/sop/DataUrl/${path}?t=${performance.now()}`;
}
export function testenginenodessopDataUrl(qUnit: QUnit) {
	qUnit.test('dataUrl json', async (assert) => {
		const geo1 = window.geo1;

		const dataUrl1 = geo1.createNode('dataUrl');

		let container;
		container = await dataUrl1.compute();
		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 2);

		await window.scene.root().processQueue();

		dataUrl1.p.url.set(_dataUrlUrl('default.json'));
		container = await dataUrl1.compute();

		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 8);

		dataUrl1.p.url.set(_dataUrlUrl('basic.json'));
		container = await dataUrl1.compute();

		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 2);

		// and a non existing
		dataUrl1.p.url.set('/dataurl_doesnotexist.json');
		container = await dataUrl1.compute();

		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 0);
		assert.equal(
			dataUrl1.states.error.message(),
			'could not load geometry from /dataurl_doesnotexist.json (SyntaxError: Unexpected token \'<\', "<!DOCTYPE "... is not valid JSON)'
		);

		// restore it with a good url
		dataUrl1.p.url.set(_dataUrlUrl('default.json'));
		container = await dataUrl1.compute();
		assert.equal(container.pointsCount(), 8);
	});

	qUnit.test('dataUrl csv without reading names from file', async (assert) => {
		const geo1 = window.geo1;

		const dataUrl1 = geo1.createNode('dataUrl');
		dataUrl1.p.url.set(_dataUrlUrl('without_attrib_names.csv'));
		dataUrl1.p.dataType.set(DATA_TYPES.indexOf(DataType.CSV));
		dataUrl1.p.readAttribNamesFromFile.set(0);
		dataUrl1.p.attribNames.set('attr1 attr2 attr3');

		let container;
		container = await dataUrl1.compute();
		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 2);
		const core_group = container.coreContent()!;
		const point0 = core_group.points()[0];
		const point1 = core_group.points()[1];
		assert.equal(point0.attribValue('attr1'), 1);
		assert.equal(point0.attribValue('attr2'), 2);
		assert.equal(point0.attribValue('attr3'), 3);
		assert.equal(point1.attribValue('attr1'), 5);
		assert.equal(point1.attribValue('attr2'), 6);
		assert.equal(point1.attribValue('attr3'), 7);
		const geometry = core_group.threejsObjectsWithGeo()[0].geometry;
		assert.deepEqual((geometry.attributes.position as BufferAttribute).array.length, 6);
		assert.deepEqual((geometry.attributes.attr1 as BufferAttribute).array.length, 2);
		assert.deepEqual((geometry.attributes.attr2 as BufferAttribute).array.length, 2);
		assert.deepEqual((geometry.attributes.attr3 as BufferAttribute).array.length, 2);
		assert.deepEqual(Object.keys(geometry.attributes).sort(), ['attr1', 'attr2', 'attr3', 'position']);
	});
	qUnit.test('dataUrl csv with reading names from file', async (assert) => {
		const geo1 = window.geo1;

		const dataUrl1 = geo1.createNode('dataUrl');
		dataUrl1.p.url.set(_dataUrlUrl('with_attrib_names.csv'));
		dataUrl1.p.dataType.set(DATA_TYPES.indexOf(DataType.CSV));
		dataUrl1.p.readAttribNamesFromFile.set(1);

		let container = await dataUrl1.compute();
		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 2);
		const core_group = container.coreContent()!;
		const point0 = core_group.points()[0];
		const point1 = core_group.points()[1];
		assert.equal(point0.attribValue('rot'), 1);
		assert.equal(point0.attribValue('scale'), 2);
		assert.equal(point0.attribValue('mult'), 3);
		assert.equal(point0.attribValue('add'), 4);
		assert.equal(point1.attribValue('rot'), 5);
		assert.equal(point1.attribValue('scale'), 6);
		assert.equal(point1.attribValue('mult'), 7);
		assert.equal(point1.attribValue('add'), 8);
		const geometry = core_group.threejsObjectsWithGeo()[0].geometry;
		assert.deepEqual((geometry.attributes.position as BufferAttribute).array.length, 6);
		assert.deepEqual((geometry.attributes.rot as BufferAttribute).array.length, 2);
		assert.deepEqual((geometry.attributes.scale as BufferAttribute).array.length, 2);
		assert.deepEqual((geometry.attributes.mult as BufferAttribute).array.length, 2);
		assert.deepEqual((geometry.attributes.add as BufferAttribute).array.length, 2);
		assert.deepEqual(Object.keys(geometry.attributes).sort(), ['rot', 'mult', 'add', 'position', 'scale'].sort());
	});
	qUnit.test('dataUrl csv with empty line', async (assert) => {
		const geo1 = window.geo1;

		const dataUrl1 = geo1.createNode('dataUrl');
		dataUrl1.p.url.set(_dataUrlUrl('with_empty_line.csv'));
		dataUrl1.p.dataType.set(DATA_TYPES.indexOf(DataType.CSV));
		dataUrl1.p.readAttribNamesFromFile.set(1);

		let container = await dataUrl1.compute();
		assert.ok(!dataUrl1.isDirty());
		assert.equal(container.pointsCount(), 2);
		const core_group = container.coreContent()!;
		const geometry = core_group.threejsObjectsWithGeo()[0].geometry;
		assert.deepEqual((geometry.attributes.position as BufferAttribute).array.length, 6);
		assert.deepEqual((geometry.attributes.rot as BufferAttribute).array.length, 2);
		assert.deepEqual(Object.keys(geometry.attributes).sort(), ['rot', 'mult', 'add', 'position', 'scale'].sort());
	});
	qUnit.test('dataUrl with assetsRoot', async (assert) => {
		const geo1 = window.geo1;

		const dataUrl1 = geo1.createNode('dataUrl');
		dataUrl1.p.url.set('curve_data.json');

		async function pointsCount() {
			let container = await dataUrl1.compute();
			assert.ok(!dataUrl1.isDirty());
			return container.pointsCount();
		}

		window.scene.assets.setRoot('/clients/me');
		assert.equal(await pointsCount(), 1);

		window.scene.assets.setRoot('/clients/me2');
		dataUrl1.p.reload.pressButton();
		assert.equal(await pointsCount(), 0);

		window.scene.assets.setRoot('/clients/me');
		dataUrl1.p.reload.pressButton();
		assert.equal(await pointsCount(), 1);
	});
}
