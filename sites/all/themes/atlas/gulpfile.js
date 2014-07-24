var gulp = require('gulp');
var watch = require('gulp-watch');
var compass = require('gulp-compass');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');

// paths
var imgSrc = './images/src/*';
var imgDest = './images';
var sassSrc = './sass/**/*.scss';
var sassDest = 'css';

// add compass task
gulp.task('compass', function() {
  gulp.src(sassSrc)
  .pipe(compass({
    config_file: './config.rb',
    css: 'css',
    sass: 'sass'
  }))
  .pipe(gulp.dest(sassDest));
});

// add image minify task
gulp.task('imagemin', function() {

  gulp.src(imgSrc)
    .pipe(newer(imgSrc))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(sassSrc, ['compass']);
  gulp.watch(imgSrc, ['imagemin']);
});

gulp.task('default', ['compass', 'imagemin', 'watch']);
