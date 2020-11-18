const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const validator = require('../helper/validators.js');
const apiHelper = require('../helper/api_helpers.js');
const apiEndPointHelper = require("../helper/api_endpoints");

let baseUrl = apiEndPointHelper.baseUrl;
let apiEndPoint = apiEndPointHelper.myEndPoint;

describe('Users', function () {
    describe('GET Request', function () {
        it('Should Get all the users from request', async function () {
            let res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint );
            console.log(res.body);

            res.status.should.equal(200);
            const randomItemFromResponse = res.body[Math.floor(Math.random() * res.body.length)];

            randomItemFromResponse.should.have.property('id').which.is.a.Number();
            randomItemFromResponse.should.have.property('name').which.is.a.String();
            randomItemFromResponse.should.have.property('username').which.is.a.String();
            randomItemFromResponse.should.have.property('email').which.is.a.String();
            randomItemFromResponse.should.have.property('address').which.is.an.object;
            randomItemFromResponse.should.have.property('phone').which.is.a.String();
            randomItemFromResponse.should.have.property('website').which.is.a.String();
            randomItemFromResponse.should.have.property('company').which.is.an.object;
        });
    });
});