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
            validator.dataTypeValidator(res);
        });
    });

});