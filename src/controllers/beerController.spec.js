import chai from 'chai';
import sinon from 'sinon';
import BeerController from './beerController.js';
import BeerServices from '../services/beer.services.js';
const expect = chai.expect;

let req, res, next;

describe('BeerController', () => {
    let beerServicesStub;
    before(() => {
        beerServicesStub = sinon.stub(BeerServices, 'getBeer').returns(
            Promise.resolve({
                data: {
                    id: 1,
                    temperature: -2,
                },
            })
        );
    });
    after(() => {
        beerServicesStub.restore();
    });
    beforeEach(() => {
        req = {
            params: { id: 1 },
        };
        res = { send: sinon.fake() };
        next = sinon.fake();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('getBeer', () => {
        it('response should be provided', async () => {
            await BeerController.getBeer(req, res, next);
            expect(res.send.args[0][0]).to.have.property('data').eql({
                id: 1,
                temperature: -2,
            });
        });

        it('should send 404 result if params does NOT have id', async () => {
            req.params.id = undefined;
            beerServicesStub = sinon
                .stub(BeerServices, 'getBeer')
                .returns(Promise.resolve(null));
            await BeerController.getBeer(req, res, next);
            expect(next.args[0][0]).to.have.property(
                'msg',
                'the beer not found'
            );
            expect(next.args[0][0]).to.have.property('status', 404);
        });

        it('should send 400 result if psomething gets wrong', async () => {
            req.params = undefined;
            await BeerController.getBeer(req, res, next);
            expect(next.args[0][0]).to.have.property(
                'msg',
                'failed to fetch beer info'
            );
            expect(next.args[0][0]).to.have.property('status', 400);
        });
    });

    describe('getBeers', () => {
        it('response should be provided', async () => {
            await BeerController.getBeers(req, res, next);
            expect(res.send.args[0][0]).to.be.an('array').to.have.lengthOf(6);
        });

        it('should send 404 result if params does NOT have id', async () => {
            beerServicesStub = sinon
                .stub(BeerServices, 'getBeer')
                .returns(Promise.resolve(null));
            await BeerController.getBeers(req, res, next);
            expect(next.args[0][0]).to.have.property(
                'msg',
                'the beer not found'
            );
            expect(next.args[0][0]).to.have.property('status', 404);
        });

        it('should send 400 result if psomething gets wrong', async () => {
            beerServicesStub = sinon.stub(BeerServices, 'getBeer').rejects();
            await BeerController.getBeers(req, res, next);
            expect(next.args[0][0]).to.have.property(
                'msg',
                'failed to fetch beers info'
            );
            expect(next.args[0][0]).to.have.property('status', 400);
        });
    });
});
