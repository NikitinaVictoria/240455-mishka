"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      }
    },

    sass: {
      style: {
        files: {
          "build/css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
        src: "build/css/*.css"
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "build",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass", "postcss", "csso"]
      }
    },

    clean: {
      build: ["build"]
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "sass",
    "postcss",
    "csso",
    "imagemin"
  ]);
};
