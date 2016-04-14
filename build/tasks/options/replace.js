module.exports = {
    dist: {
        options: {
            patterns: [{
                match: /src=\"..\/bower_components/g,
                replacement: 'src="js/libs',
            }, {
                match: /href=\"..\/bower_components/g,
                replacement: 'href="css/libs'
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: ['build/index.html'],
            dest: 'build/'
        }]
    }
}
