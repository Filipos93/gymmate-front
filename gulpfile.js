'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
 
gulp.task('jsmin', function () {
    gulp.src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.init())
	.pipe(postcss([ autoprefixer() ]))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('watch', ['sass', 'jsmin'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['jsmin']);
});