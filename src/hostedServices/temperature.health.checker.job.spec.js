import chai from 'chai';
import sinon from 'sinon';
import JobService from './job.service.js';
import temperatureHealthChecker from './temperature.health.checker.job.js';
import socket from '../socket.js';
import BeerServices from './../services/beer.services.js';
import config from '../config/app.config.js';

const expect = chai.expect;
describe('JobService', () => {
    let jobSpy;
    let socketSpy;
    let beerServicesSpy;
    let configStub;
    before(() => {
        jobSpy = sinon.spy(JobService, 'run');
        socketSpy = sinon.spy(socket, 'getActiveSocket');
        beerServicesSpy = sinon.spy(
            BeerServices,
            'getBeersOutsideTemperatureIds'
        );

        configStub = sinon.stub(config, 'get').returns({
            monitor: { cron: '* * * * * *' },
        });
    });
    after(() => {
        jobSpy.restore();
        socketSpy.restore();
        beerServicesSpy.restore();
        configStub.restore();
    });

    describe('temperatureHealthChecker', () => {
        it('temperatureHealthChecker -> job.service.run has been called', (done) => {
            temperatureHealthChecker();
            sinon.assert.called(jobSpy);
            setTimeout(() => {
                sinon.assert.called(socketSpy);
                sinon.assert.called(beerServicesSpy);
                done();
            }, 1000);
        });
    });
});
