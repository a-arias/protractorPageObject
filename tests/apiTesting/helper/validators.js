
exports.dataTypeValidator = function (res) {
    res.body.should.have.property('id').which.is.a.Number();
    res.body.should.have.property('name').which.is.a.String();
    res.body.should.have.property('username').which.is.a.String();
    res.body.should.have.property('email').which.is.a.String();
    res.body.should.have.property('address').which.is.an.object();
    res.body.should.have.property('phone').which.is.a.String();
    res.body.should.have.property('website').which.is.a.String();
    res.body.should.have.property('company').which.is.an.Object();

};