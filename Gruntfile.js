'use strict';

module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var config = {};

    config.closureDepsWriter = {
        "options": {
            "closureLibraryPath": "bower_components/closure-library",
            "root_with_prefix": '"js ../../../../js"'
        },
        "videojsAngular": {
            "dest": "js/deps.js"
        }
    };
    config.concat = {
        "dist": {
            "src": ["js/extern-deps.js", "js/deps.js"],
            "dest": "js/debug-deps.js"
        }
    };

    grunt.initConfig(config);

    var tasks = ["closureDepsWriter", "concat"];
    grunt.registerTask("default", tasks);

};