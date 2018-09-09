'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

let path = {
    sass_src: './src/sass/**/*.scss',
    sass_dest: './build/css'
};

gulp.task('sass', function () {
    return gulp.src(path.scss_src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.sass_dest));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

let tinify = require("tinify");
tinify.key = "4Mmy1onqAREgbsFQZhWIxkvGt6fDUyyX";
