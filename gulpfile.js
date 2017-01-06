// Imports All Gulp (Node) Modules
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

// Calls in 'gulp-sass' function 
gulp.task('sass', function () {
  return gulp.src('./css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));

});

//  Gulp Watch Task - runs all monitoring tasks
gulp.task('watch', function () {
  gulp.watch('./css/scss/*.scss', ['sass']);
});