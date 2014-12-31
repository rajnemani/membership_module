var User = require("../models/user");
var Application = require("../models/application");
var RegResult = function() {

    var result = {
        success : false,
        message : null,
        user : null
    };

    return result;
};
var validateInputs = function(app) {

    console.log(app.email);
    console.log(app.password);
    console.log(app.confirm);
   /* if(!app.email || !app.password) {
        app.setInvalid("Email and password are invalid");
        console.log("bad email password");
    }
    else if(app.password != app.confirm) {

        app.setInvalid("Passwords do not match");
        console.log("bad email password-1");
    }
    else {
        app.validate();
    }*/
    app.validate();
};

exports.applyForMembership = function(args) {

    var regResult = new RegResult();
    var app = new Application(args);
    validateInputs(app);
    if(app.isValid()) {
        regResult.success = true;
        regResult.message = "Welcome!";
        regResult.user = new User(args);

    }
    return regResult;
};