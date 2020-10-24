import chai from 'chai';
import BearServices from './beer.services.js';

const expect = chai.expect;
describe('BearServices', function () {
    describe('getBeer', () => {
        it('getBeer function should be called with the expected object response', async () => {
            const result = await BearServices.getBeer(1);
            expect(result).to.have.property('id').equal(1);
            expect(result).to.have.property('currentTemperature').equal(-2);
        });
        it('getBeer function should be called with the expected object response', async () => {
            const result = await BearServices.getBeer();
            expect(result).to.be.null;
        });
    });
    describe('getBeers', () => {
        it('getBeers function should be called with the expected array response', async () => {
            const result = await BearServices.getBeers();
            expect(data).to.be.an('array');
            expect(result).to.have.lengthOf(6);
            result.forEach((beer) => {
                expect(beer).to.have.property('id');
                expect(beer).to.have.property('currentTemperature');
            });
        });
    });
});
