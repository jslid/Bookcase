module.exports = function(grunt) {

  grunt.initConfig({
    
    // Minify Javascript
    uglify: {
      my_target: {
        options: {
          preserveComments: 'all'
        },
        files: [{
          'dist/js/equal-height.js': 'src/js/equal-height.js'
        }]
      }
    },

    // Coffee JS
    coffee: {
      compile: {
        expand:true,
        flatten:false,
        cwd: 'src/coffee',
        src: ['**/*.coffee'],
        dest: 'dist/js',
        ext: '.js'
      },
      options: {
        bare:true
      }
    },

    // JShint 
    jshint: {
      files: ['src/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
 
    // LESS
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          // Base Framework Styles
          'dist/css/bookcase.css': 'src/less/bookcase.less',
          'dist/css/helpers.css': 'src/less/helpers.less'
        }
      }
    },
    
    // SASS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/bookcase.css': 'src/scss/bookcase.scss',
          'dist/css/helpers.css': 'src/scss/helpers.scss'
        }
      }
    },

    // Stylus
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'dist/css/bookcase.css': 'src/styl/bookcase.styl',
          'dist/css/helpers.css': 'src/styl/helpers.styl'
        }
      }
    },

    // Jade
    jade: {
      compile: {
        options:{
          debug: false,
          pretty: true
        },
        files: {
          'dist/index.html': 'src/index.jade'
        }
      }
    },

    // HAML
    haml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.haml'
        }
      }
    },

    // Image Compression
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['src/img/*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    },
    
    // Watch Files

    /*
    The default for Bookcase is to look for LESS, JADE and Javascript changes. Instructions for making use of CSS Processors or 
    HTML Template Languages is below:

    -- CSS Preprocessors
        LESS: To use LESS make 'less' the file location, and the file type .less. Make the tasks 'less'.
        SASS: To use SASS make 'scss' the file location, and the file type .scss. Make the tasks 'sass'.
        STYLUS: To use STYLUS make 'styl' the file location, and the file type .styl. Make the tasks 'stylus'.

    -- HTML Template Languages
        HAML: To use HAML the file type .haml. Make the tasks 'haml2html'.
        JADE: To use JADE the file type .jade. Make the tasks 'jade'.
    */

    watch: {
      styles: {
        files: ['src/less/**/*.less', 'src/**/*.jade', 'src/js/**/*.js', 'src/coffee/**/*.coffee'], 
        tasks: ['less', 'jade'],
        options: {
          nospawn: true
        }
      }
    }
  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify', 'jshint', 'coffee:compile', 'less', 'jade', 'watch', 'newer:imagemin:all' ]);

};