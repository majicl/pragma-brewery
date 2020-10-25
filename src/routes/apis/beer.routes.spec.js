import httpMocks from 'node-mocks-http';
import chai from 'chai';
import { EventEmitter } from 'events';
import { beersRouter } from './beer.routes.js';

const expect = chai.expect;

describe('/beer/{id}', () => {
    it('should return 200', (done) => {
        const mockRequest = httpMocks.createRequest({
            method: 'GET',
            url: '/1',
            params: {
                id: 1,
            },
        });
        let mockResponse = httpMocks.createResponse({
            eventEmitter: EventEmitter,
        });

        mockResponse.on('send', () => {
            const response = mockResponse._getData();
            const status = mockResponse._getStatusMessage();
            const statusCode = mockResponse._getStatusCode();
            expect(status).equals('OK');
            expect(statusCode).equals(200);
            expect(response).to.have.property('id');
            expect(response).to.have.property('temperature');
            done();
        });

        beersRouter(mockRequest, mockResponse);
    });
});

describe('/beer', () => {
    it('should return 200', (done) => {
        const mockRequest = httpMocks.createRequest({
            method: 'GET',
            url: '/',
        });
        let mockResponse = httpMocks.createResponse({
            eventEmitter: EventEmitter,
        });

        mockResponse.on('send', () => {
            const response = mockResponse._getData();
            const status = mockResponse._getStatusMessage();
            const statusCode = mockResponse._getStatusCode();
            expect(status).equals('OK');
            expect(statusCode).equals(200);
            expect(response).to.be.an('array').to.have.lengthOf(6);
            done();
        });

        beersRouter(mockRequest, mockResponse);
    });
});
