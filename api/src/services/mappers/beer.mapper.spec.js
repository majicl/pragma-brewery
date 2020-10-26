import chai from 'chai';
import BeerMappers from './beer.mapper.js';

const expect = chai.expect;
describe('BeerMapper', () => {
    const beer = {
        id: 1,
        temperature: -1,
    };

    describe('map', () => {
        it('returns null if beer is null', () => {
            var result = BeerMappers.map(null);
            expect(result).to.be.null;
        });
        it('returns undefined if beer is undefined', () => {
            var result = BeerMappers.map(undefined);
            expect(result).to.be.undefined;
        });
        it('returns mapped data', () => {
            var result = BeerMappers.map(beer);
            expect(result).to.have.property('id').equal(1);
            expect(result).to.have.property('currentTemperature').equal(-1);
            expect(result)
                .to.have.property('temperature')
                .to.have.property('max').to.be.not.null;
            expect(result)
                .to.have.property('temperature')
                .to.have.property('min').to.be.not.null;
        });
    });
});
