import chai from 'chai';
import sinon from 'sinon';
import JobService from './job.service.js';
import temperatureHealthChecker from './temperature.health.checker.job.js';

const expect = chai.expect;
describe('JobService', () => {
    let jobStub;
    before(() => (jobStub = sinon.spy(JobService, 'run')));
    after(() => jobStub.restore());

    describe('temperatureHealthChecker', () => {
        it('temperatureHealthChecker -> job.service.run has been called', async () => {
            temperatureHealthChecker();
            sinon.assert.called(jobStub);
        });
    });
});
