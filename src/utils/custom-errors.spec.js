import chai from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import { Alarm, AppError } from './custom-errors.js';

const expect = chai.expect;
describe('CustomErrors', () => {
    let consoleSpy;
    before(() => {
        consoleSpy = sinon.stub(console, 'error');
    });
    after(() => {
        consoleSpy.restore();
    });
    it('AppError', () => {
        const appErr = new AppError('an error has happened');
        expect(appErr).to.have.property('status').equals(500);
        expect(appErr).to.have.property('message').equals('an error has happened');
    });
    it('AppError with Status Code', () => {
        const appErr = new AppError('not found', 404);
        expect(appErr).to.have.property('status').equals(404);
        expect(appErr).to.have.property('message').equals('not found');
    });

    it('Alarm', () => {
        const appErr = new Alarm('an error has happened');
        expect(appErr).to.have.property('status').equals(500);
        expect(appErr).to.have.property('message').equals('an error has happened');
    });
    it('Alarm with Status Code', () => {
        const appErr = new Alarm('not found', 404);
        expect(appErr).to.have.property('status').equals(404);
        expect(appErr).to.have.property('message').equals('not found');
    });

    it('Alarm has console.error', () => {
        const appErr = new Alarm('not found', 404);
        sinon.assert.calledWith(consoleSpy, 'not found');
    });
});
