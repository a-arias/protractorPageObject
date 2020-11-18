const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
import * as apiHelper from "../helper/api_helpers";
import * as validator from "../helper/validators";

const apiEndPointHelper = require("../helper/api_endpoints");
let baseUrl = apiEndPointHelper.baseUrl;
let apiEndPoint = apiEndPointHelper.myEndPoint;

describe('Superhero Api Suite', function () {
    describe('GET Request', function () {
        it('Should Get Superhero', async function () {
            let res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint + apiEndPoint);
            console.log(res.body);
            res.status.should.equal(200);
            validator.dataTypeValidator(res);
        });
    });

});