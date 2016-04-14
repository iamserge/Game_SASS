module.exports = {
    options: {},
        js: {
            options: {
                destPrefix: 'build/js/libs'
            },
            // By not specifying a destination, you are denoting 
            // that the lodash directory structure should be maintained 
            // when copying. 
            // For example, one of the files copied here is 
            // 'lodash/dist/lodash.js' -> 'public/js/libs/lodash/dist/lodash.js' 
            src: '**/*.js'
        },
        css: {
            options: {
                destPrefix: 'build/css/libs'
            },
            // By not specifying a destination, you are denoting 
            // that the lodash directory structure should be maintained 
            // when copying. 
            // For example, one of the files copied here is 
            // 'lodash/dist/lodash.js' -> 'public/js/libs/lodash/dist/lodash.js' 
            src: '**/*.css'
        },
}
