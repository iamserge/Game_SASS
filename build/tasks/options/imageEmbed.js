module.exports = {
    dist: {
        src: ["../newCss/css/headerFooter.css"],
        dest: "../newCss/css/headerFooter.css",
        options: {
            deleteAfterEncoding: false,
            preEncodeCallback: function(filename) {
                return true;
            }
        }
    }
}
