import chai from 'chai';
import sinon from 'sinon';
import scheduler from 'node-cron';
import { run } from './job.service.js';

const expect = chai.expect;
describe('JobService', () => {
    let schedulerStub;
    before(() => (schedulerStub = sinon.stub(scheduler, 'schedule')));
    after(() => schedulerStub.restore());

    describe('run', () => {
        it('run -> scheduler.schedule has been called', async () => {
            const fn = () => {};
            run(fn, '*/1 * * * *');
            sinon.assert.alwaysCalledWith(schedulerStub, '*/1 * * * *', fn);
            expect(schedulerStub.calledOnce);
        });
    });
});
