module.exports = function(grunt) {

    // Utility to load the different option files
    // based on their names
    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {
            cwd: path
        }).forEach(function(option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }



    // Initial config
    var config = {
        pkg: grunt.file.readJSON('package.json')
    }


    // Load tasks from the tasks folder
    grunt.loadTasks('./tasks');

    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);



/**
 *
 * Dynamic css image embed to base64
 *
 */



    grunt.registerTask('custom-image-embed', 'Convert images into base64', function() {
        grunt.file.expand("../css/*").forEach(function(dir) {
            var imageEmbed = grunt.config.get('imageEmbed') || {};

            var name = dir.substr(dir.lastIndexOf('/') + 1);
            console.log(dir);

            imageEmbed[dir] = {
                src: [dir],
                dest: dir
            }

            grunt.config.set('imageEmbed', imageEmbed);
        })
        grunt.task.run('imageEmbed');
    })


    /**
     *
     * Dynamic sass mapping
     *
     */

    grunt.registerTask("custom-sass", "your description", function() {


        grunt.file.expand("../sass/pages/*").forEach(function(dir) {
            var sass = grunt.config.get('sass') || {};

            var name = dir.substr(dir.lastIndexOf('/') + 1);

            sass[dir] = {

                files: {
                    ['../css/' + name + '.css']: ['' + dir + '/*.scss'], ['../css/global_espots.css']: ['../sass/global/global_espots.scss'],
                },
                options: {
                    style: 'compressed'
                }
            }

            grunt.config.set('sass', sass);
        });

        grunt.task.run('sass');

    });

};
