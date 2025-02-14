import type {QUnit} from '../../../helpers/QUnit';
import {RendererUtils} from '../../../helpers/RendererUtils';
export function testenginenodeseventDrag(qUnit: QUnit) {

qUnit.test('drag event nodes simple', async (assert) => {
	const scene = window.scene;
	await scene.waitForCooksCompleted();
	assert.ok(!scene.loadingController.isLoading());

	await RendererUtils.withViewer({cameraNode: window.perspective_camera1}, async ({viewer, element}) => {
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), []);

		const events = scene.root().createNode('eventsNetwork');
		const drag1 = events.createNode('drag');
		await drag1.compute();
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), ['dragover']);

		drag1.p.active.set(0);
		await drag1.compute();
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), [], 'no events if node is set to inactive');

		drag1.p.active.set(1);
		await drag1.compute();
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), ['dragover']);

		drag1.p.dragover.set(0);
		await drag1.compute();
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), []);

		events.removeNode(drag1);
		await drag1.compute();
		assert.deepEqual(viewer.eventsController().registeredEventTypes(), []);

		drag1.p.active.set(1);
		await drag1.compute();
		assert.deepEqual(
			viewer.eventsController().registeredEventTypes(),
			[],
			'setting a deleted node to active does not update the register'
		);

		const drag2 = events.createNode('drag');
		await drag2.compute();
		drag2.p.dragover.set(0);
		await drag2.compute();
		drag2.p.dragover.set(1);
		await drag2.compute();
		// creating a new viewer will set its listeners correctly as well
		const element2 = document.createElement('div');
		document.body.appendChild(element2);

		await RendererUtils.withViewer({cameraNode: window.perspective_camera1}, async (args2) => {
			assert.deepEqual(args2.viewer.eventsController().registeredEventTypes(), ['dragover']);
		});
	});
});

}