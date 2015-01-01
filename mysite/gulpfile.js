// src -> dist

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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

gulp.task('js', function () {
    gulp.src('./src/coffee/*')
        .pipe(coffee())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['msg', 'img', 'js']);