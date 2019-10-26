module.exports = function(grunt) {

  return {

    options: {
      // sourceMap: true,
      compress: true,
    },

    global: {
      expand: true,
      cwd: 'css/global',
      src: '*.less',
      dest: 'css/output',
      ext: '.css',
    },

  }
};