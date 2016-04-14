module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'dev/css/*.css',
    dest: 'dev/css/prefixed/'
  }
}