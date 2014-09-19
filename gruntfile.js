module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

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
                tasks: ['style']
            },
            js: {
                files: ['js/**/*.js', '!js/bundle.js'],
                tasks: ['js']
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
            },
            build: {
                tasks: ['style', 'swig', 'js'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.registerTask('default', ['build', 'concurrent:watch']);
    grunt.registerTask('build', ['concurrent:build']);
    grunt.registerTask('js', ['jshint', 'browserify']);
    grunt.registerTask('style', ['sass', 'autoprefixer']);

    grunt.loadTasks('tasks');
};