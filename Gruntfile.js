/* This file has all the Grunt tasks including tasks to run and watch mocha tests*/
var db = require("secondthought");
var asset = require("assert");
module.exports = function (grunt) {

    grunt.initConfig({
        jshint : {
            files:['lib/**/*js', 'models/**/*js']
        },
        watch : {
            files:['lib/**/*js', 'models/**/*js'],
            tasks:['jshint']
        }
    });

    grunt.registerTask("installDb", function() {
        var done = this.async();
        db.connect({db:"membership"}, function(err,db) {
            db.install(['users','logs','sessions'],function(err, tableResult){
                assert.ok(err==null,err);
                console.log("Db installed: " + tableResult);
            });
        });
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}