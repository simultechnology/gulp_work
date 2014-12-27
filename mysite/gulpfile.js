// src -> dist

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('hello', function () {
    console.log('hello world!');
});

gulp.task('img', function () {
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('msg', ['html'], function () {
    console.log('html copy done!');
});

gulp.task('default', ['msg', 'img']);