// get the module name from the directory name


module.exports = {
    // old dev 
    dev: {
        options: {
            // cssmin will minify later
            style: 'expanded'
        },
        files: {
            '../css/global_espots.css': '../sass/global/*.scss',
        }
    }
}