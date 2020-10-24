import chai from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import HttpClient from './http.client.js';

const expect = chai.expect;
describe('HttpClient', () => {
    let axiosStub;
    before(() => {
        axiosStub = sinon.stub(axios, 'get').returns(
            Promise.resolve({
                data: {
                    id: 1,
                    temperature: -2,
                },
            })
        );
    });
    after(() => {
        axiosStub.restore();
    });
    describe('get', () => {
        it('the httpClient get function should be called with the expected response', async () => {
            var result = await HttpClient.get('https://www.google.com');
            expect(result).to.have.property('data').eql({
                id: 1,
                temperature: -2,
            });
        });
    });
});
