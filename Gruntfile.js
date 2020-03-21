module.exports = function (grunt) {
  grunt.config('apikey-gcp-gcs', (function(){
    return grunt.option('apikey-gcp-gcs');
  })());
  grunt.config('apikey-gfb-app', (function(){
    return grunt.option('apikey-gfb-app');
  })());
  grunt.config('apikey-grecaptcha', (function(){
    return grunt.option('apikey-grecaptcha');
  })());
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/assets/sass',
          src: ['**/*.scss'],
          dest: 'dist/assets/css',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'dist/assets/css/*'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/assets/css',
          ext: '.min.css'
        }]
      }
    },
    concat: {
        options: {
            separator: ';\n'
        },
        dist: {
            src: ['src/assets/js/*'],
            dest: 'dist/assets/js/main.min.js'
        }
    },
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: false
        }
      },
      js: {
        files: [{
          cwd: 'dist/assets/js/',
          expand: true,
          src: '*.js',
          dest: 'dist/assets/js/'
        }]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src', src: '*', dest: 'dist/'},
          {expand: true, cwd: 'src/assets/images', src: '**', dest: 'dist/assets/images'},
          {expand: true, cwd: 'data/', src: '**', dest: 'dist/data'}
        ]
      },
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'apikey-gcp-gcs',
              replacement: grunt.config('apikey-gcp-gcs')
            },
            {
              match: 'apikey-gfb-app',
              replacement: grunt.config('apikey-gfb-app')
            },
            {
              match: 'apikey-grecaptcha',
              replacement: grunt.config('apikey-grecaptcha')
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['dist/index.html'], dest: 'dist/'},
          {expand: true, flatten: true, src: ['dist/assets/js/main.min.js'], dest: 'dist/assets/js/'}
        ]
      }
    },
    /*critical: {
      dist: {
        options: {
          base: './'
        },
        // The source file
        src: 'dist/index.html',
        // The destination file
        dest: 'dist/index.html'
      }
    },*/
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'concat', 'copy', 'replace']);
  grunt.registerTask('compile', ['sass', 'postcss', 'cssmin', 'concat', 'uglify', 'copy', 'replace', 'htmlmin']);
};