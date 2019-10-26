module.exports = function(grunt) {

  return {

    options: {
      flatten: true
    },

    default: {

      files: [{
        cwd: '',
        src: ['html/index.html'],
        dest: 'index.html',
      }, ],

    },


    css: {

      files: [{
        cwd: 'css/',
        src: ['myStyles.css'],
        dest: 'css/output/',
      }, ],

    },

  }
};