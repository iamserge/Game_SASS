module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'dev/img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'build/img/'
    }]
  }
}