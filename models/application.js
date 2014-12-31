
var Application = function(args) {

    var app = {};
    app.email = args.email;
    app.password = args.password;
    app.confirm = args.confirm;
    app.status = "pending";
    app.message = null;

    app.isValid = function() {

        return app.status == "validated";
    };
    app.setInvalid = function(message) {
        app.status = "invalid";
        app.message = message;
    };
    app.isInvalid = function() {

        return !(app.isValid());
    };

    app.validate = function(message) {
        app.status = "validated";
        //app.message = message;
    };
    return app;

};

module.exports = Application;