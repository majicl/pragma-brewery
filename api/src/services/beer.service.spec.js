import chai from 'chai';
import sinon from 'sinon';
import BearServices from './beer.services.js';
import HttpClient from '../commons/http.client.js';

const expect = chai.expect;
describe('BearServices', () => {
    let httpClientStub;
    before(() => {
        httpClientStub = sinon.stub(HttpClient, 'get').callsFake((url) => {
            if (!url || url.endsWith('undefined')) {
                return Promise.resolve(null);
            }
            return Promise.resolve({
                data: {
                    id: 1,
                    temperature: -2,
                },
            });
        });
    });

    after(() => {
        httpClientStub.restore();
    });
    describe('getRawBeer', () => {
        it('getRawBeer(1) function should be called with the expected object response expectation', async () => {
            const result = await BearServices.getRawBeer(1);
            expect(result).to.have.property('id').equal(1);
            expect(result).to.have.property('temperature').equal(-2);
        });
        it('getRawBeer() function should be called with NULL response', async () => {
            const result = await BearServices.getRawBeer();
            expect(result).to.be.null;
        });
        it('getRawBeer(undefined) function should be called with the NULL response expectation', async () => {
            const result = await BearServices.getRawBeer(undefined);
            expect(result).to.be.null;
        });
    });
    describe('getBeer', () => {
        it('getBeer(1) function should be called with the expected object response expectation', async () => {
            const result = await BearServices.getBeer(1);
            expect(result).to.have.property('id').equal(1);
            expect(result).to.have.property('currentTemperature').equal(-2);
        });
        it('getBeer() function should be called with NULL response', async () => {
            const result = await BearServices.getBeer();
            expect(result).to.be.null;
        });
        it('getBeer(undefined) function should be called with the NULL response expectation', async () => {
            const result = await BearServices.getBeer(undefined);
            expect(result).to.be.null;
        });
    });
    describe('getBeers', () => {
        it('getBeers function should be called with the expected array response expectation', async () => {
            const result = await BearServices.getBeers();
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(6);
            result.forEach((beer) => {
                expect(beer).to.have.property('id');
                expect(beer).to.have.property('temperature');
            });
        });
    });

    describe('getRawBeers', () => {
        it('getRawBeers() function should be called with the expected array response expectation', async () => {
            const result = await BearServices.getRawBeers();
            expect(result).to.be.an('Object').that.is.not.empty;;
        });
    });
});
