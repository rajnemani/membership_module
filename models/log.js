var assert = require("assert");
var log = function(args) {
    assert.ok(args.subject && args.entry && args.userId, "Nedd subject,entry, and user id");
    var log = {};
    log.subject = args.subject;
    log.entry = args.entry;
    log.createdAt = new Date();
    log.userId = args.userId;

    return log;
}