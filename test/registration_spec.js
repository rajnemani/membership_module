var Registration = require("../lib/registration");

describe("Registration", function() {



    describe("a valid application", function() {
        var regResult = {};
        before(function() {
            regResult = Registration.applyForMembership({email:"rajnemani@gmail.com"});
        });
        it("is successful", function() {
            regResult.success.should.equal(true);
        });
        it("created a user", function() {
            regResult.user.should.be.defined;
        });
        it("created a log entry");
        it("sets the user status to approved");
        it("offers Welcome message");

    });

    describe("a empty or null email", function() {
        it("is not successful");
        it("tells user that email is required");

    });
    describe("a empty or null password", function() {
        it("is not successful");
        it("tells user that password is required");

    });
    describe("password and confirm mismatch", function() {
        it("is not successful");
        it("tells user passwords do not match");


    });
    describe("email already exists", function() {
        it("is not successful");
        it("tells user email already exists");

    });



});