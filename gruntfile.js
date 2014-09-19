module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // ----------------------------------------------------------
    // WARNING, BRAVE DEVELOPER
    // ----------------------------------------------------------
    // Webhook allows you to use local grunt tasks and files.
    // However, these tasks are ONLY RUN LOCALLY and not when
    // your live site needs to be rebuilt. This means you should
    // only use grunt for pre-processing tasks like building
    // Sass, less or coffescript files, not for reading things
    // from your templates and making dynamic changes during
    // the build process. Doing so will cause your live site
    // not to regerate.
    //
    // You have been warned!
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'nested'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        jshint: {
            options: {
                ignores: [],
                globals: {
                    jQuery: true
                }
            },
            all: ['js/**/*.js', '!js/bundle.js']
        },
        browserify: {
            dev: {
                files: {
                    'js/bundle.js': 'js/main.js'
                },
                options: {}
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: ['js/**/*.js', '!js/bundle.js'],
                tasks: ['jshint', 'browserify']
            },
            swig: {
                files: ['swig/**/*.swig', 'swig/global.json'],
                tasks: ['swig']
            }
        },
        swig: {
            dev: {
                init: {
                    root: 'swig/',
                    allowErrors: false,
                    autoescape: true
                },
                dest: './',
                cwd: 'swig/',
                src: ['index.swig']
            }
        },
        autoprefixer: {
            dev: {
                src: 'css/style.css',
                dest: 'css/style.css'
            }
        },
        concurrent: {
            watch: {
                tasks: ['watch:sass', 'watch:swig', 'watch:js'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.registerTask('default', ['concurrent:watch']);

    grunt.loadTasks('tasks');
};