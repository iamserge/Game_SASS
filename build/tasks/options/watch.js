module.exports = {
    options: {
        livereload: true,
    },
    css: {
        files: ['../sass/global/**/*.scss', '../sass/pages/**/*.scss' ],
        tasks: ['custom-sass'],
        options: {
            spawn: false,
        }
    }
}
