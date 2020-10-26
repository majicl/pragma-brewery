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
    let socketStub;
    let beerServicesStub;
    let configStub;
    let beerResult = {
        emit: () => {},
    };
    before(() => {
        jobSpy = sinon.spy(JobService, 'run');
        socketStub = sinon
            .stub(socket, 'getActiveSocket')
            .callsFake(() => beerResult);
        beerServicesStub = sinon.spy(
            BeerServices,
            'getRawBeers'
        );

        configStub = sinon.stub(config, 'get').returns({
            monitor: { cron: '* * * * * *' },
        });
    });
    after(() => {
        jobSpy.restore();
        socketStub.restore();
        beerServicesStub.restore();
        configStub.restore();
    });

    describe('temperatureHealthChecker', () => {
        it('temperatureHealthChecker -> job.service.run has been called', (done) => {
            const timer = temperatureHealthChecker();
            sinon.assert.called(jobSpy);
            setTimeout(() => {
                sinon.assert.called(socketStub);
                sinon.assert.called(beerServicesStub);
                timer.stop();
                done();
            }, 1000);
        });

        it('temperatureHealthChecker(No Socket available) -> beerServices has never called', (done) => {
            const timer = temperatureHealthChecker();
            beerResult = null;
            sinon.assert.called(jobSpy);
            setTimeout(() => {
                sinon.assert.called(socketStub);
                sinon.assert.calledOnce(beerServicesStub);
                timer.stop();
                done();
            }, 1000);
        });
    });
});
