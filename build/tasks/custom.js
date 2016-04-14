module.exports = function(grunt) {
    grunt.registerTask('custom', 'Say hello!', function() {
        grunt.log.writeln("Custom task log");
        console.log('grunt');
        // console.log(dir);

         grunt.file.expand("./*").forEach(function (dir) {
         	console.log(dir);
         })
        // var loc = window.location.pathname;
        // var dir = loc.substring(0, loc.lastIndexOf('/'));
    });

    // grunt.registerTask('custom', 'Say hello!', function() {
    //         var loc = window.location.pathname;
    //         var dir = loc.substring(0, loc.lastIndexOf('/'));

    //         grunt.log.write('custom file \n');

    //         grunt.log.write('custom file' + \n);
    //     }

};
