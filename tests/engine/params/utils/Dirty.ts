import type {QUnit} from '../../../helpers/QUnit';
export function testengineparamsutilsDirty(qUnit: QUnit) {
qUnit.skip('a geo node getting dirty gets evaluated on request', async (assert) => {});

// assert geo1.isDirty()()
// tx = geo1.param('tx')
// tx.set(12)
// assert tx.isDirty()()
// assert geo1.isDirty()()

// assert.equal geo1.cooks_count(), 0
// #geo1.parent().update_object(geo1)

// await sleep 500

// assert.equal geo1.cooks_count(), 0
// assert !tx.isDirty()()
// assert !geo1.isDirty()()

// tx.set(354)
// assert tx.isDirty()()
// assert geo1.isDirty()()

// await sleep 500

// assert.equal geo1.cooks_count(), 0
// assert !tx.isDirty()()
// assert !geo1.isDirty()()
// done()

}