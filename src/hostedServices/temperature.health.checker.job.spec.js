import chai from 'chai';
import sinon from 'sinon';
import JobService from './job.service.js';
import temperatureHealthChecker from './temperature.health.checker.job.js';
import socket from '../socket.js';
import BeerServices from './../services/beer.services.js';

const expect = chai.expect;
describe('JobService', () => {
    let jobSpy;
    let socketSpy;
    let beerServicesSpy;
    before(() => {
        jobSpy = sinon.spy(JobService, 'run');
        socketSpy = sinon.spy(socket, 'getActiveSocket');
        beerServicesSpy = sinon.spy(BeerServices, 'getBeersOutsideTemperatureIds');
    });
    after(() => {
        jobSpy.restore();
        socketSpy.restore();
        beerServicesSpy.restore();
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
