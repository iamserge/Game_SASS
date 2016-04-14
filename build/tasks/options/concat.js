module.exports = {
    options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    js: {
        src: [
            // 'bower_components/jquery/dist.jquery.js',
            // 'bower_components/**/*.js',
            'dev/js/libs/*.js',
            'dev/js/global.js'
        ],
        dest: 'build/js/global.js'
    },
    css: {
        src: [
            'bower_components/**/*.css',
            'dev/css/global.css'
        ],
        dest: 'build/css/global.css'
    }
}
