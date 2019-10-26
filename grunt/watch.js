module.exports = function(grunt) {

  return {
    options: {
      livereload: true
    },

    default: {
      files: ['html/*.html', 'css/*.less', 'js/*.js'],
      tasks: ['less', 'includes'],
    },

    css: {
      files: ['css/**/*.less'],
      tasks: ['less', 'includes'],
    },

  }
};