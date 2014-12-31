var User = require("../models/user");
var should = require("should");
describe("User", function() {
    describe("defaults", function() {

        var user = {};

        before(function () {

           user = new User({email : "rajnemani@gmail.com"});
        });

        it("email is rajnemani@gmail.com", function() {
            user.email.should.equal("rajnemani@gmail.com")
        });
        it("has an authentication token", function() {
            user.authenticationToken.should.be.defined;
        });
        it("has a pending status", function() {
            user.status.should.equal("pending");
        });
        it("has a created date", function() {
            user.createdAt.should.be.defined;
        });
        it("has a signInCount of 0", function() {
            user.signInCount.should.equal(0);
        });
        it("has lastLogin", function() {
            user.lastLoginAt.should.be.defined;
        });
        it("has currentLogin",function() {
            user.lastLoginAt.should.be.defined;
        });

    });
});