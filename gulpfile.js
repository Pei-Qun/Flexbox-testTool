const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const mainBowerFiles = require('main-bower-files');
const minimist = require('minimist'); // 用來讀取指令轉成變數

gulp.task('bower', function () {
  return gulp.src(([
    './bower_components/vue/dist/vue.js'
  ]))
    .pipe(gulp.dest('./vendors/'));
  cb(err);
});
gulp.task('default', ['bower']);