var gulp = require('gulp');
var watch = require ('gulp-watch');


//File paths
// var DIST_PATH = '../dist/indecision-app/public';
var DIST_PATH = 'dist/public';
var HTML_PATH = 'public/*.html';
// var SCRIPTS_PATH = 'public/scripts/**/*.js';
// var CSS_PATH = 'public/css/**/*.css';
// var TEMPLATES_PATH = 'templates/**/*.hbs';
// var IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';



// gulp.task('watch', function () {
//     console.log('Html changed and moved');
//     return gulp.src(HTML_PATH)
//         .pipe(gulp.dest(DIST_PATH));
// });


gulp.task('watch', function () {
    // Endless stream mode
    return watch(HTML_PATH, { ignoreInitial: false }, function () {
        console.log('Html changed and Moved')
    })
        .pipe(gulp.dest(DIST_PATH));
});
