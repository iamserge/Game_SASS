module.exports = {
    target: {
        src: 'dev/index.html', // point to your HTML file.
        fileTypes: {
            html: {
                block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                detect: {
                    js: /<script.*src=['"]([^'"]+)/gi,
                    css: /<link.*href=['"]([^'"]+)/gi
                },
                replace: {
                    js: '<script src="{{filePath}}" type="text/javascript"></script>',
                    css: '<link rel="stylesheet" href="{{filePath}}" />'
                }
            }
        }
    }
}
