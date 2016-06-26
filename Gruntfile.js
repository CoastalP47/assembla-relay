module.exports = function(grunt){
    
    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dist:{
                files: {
                    '_assets/release/css/style.css': '_assets/sass/main.scss'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_assets/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '_assets/release/images'
                }]
            }
        },
        concat: {
            options: {
                separator: '',
            },
            angular_app:{
                src: [
                    '_assets/js/angular/app.js',
                    '_assets/js/angular/services/**/*.js',
                    '_assets/js/angular/controllers/**/*.js',
                    '_assets/js/angular/components/**/*.js'
                ],
                dest: '_assets/release/js/app.js'
            }
        },
        watch: {
            scss: {
                files: '_assets/sass/**/*',
                tasks: ['sass']
            },
            js: {
                files: '_assets/js/**/*',
                tasks: ['concat']
            },
            img: {
                files: '_assets/images/**/*',
                tasks: ['imagemin']
            }
        }
    });


    // load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // register tasks
    grunt.registerTask('default', ['sass', 'concat', 'imagemin', 'watch']);
};