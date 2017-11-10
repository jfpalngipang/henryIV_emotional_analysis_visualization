var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');
var webpack = require('gulp-webpack');

var webpackConfig = require('./webpack.config.js')

gulp.task('es6', function() {
    return gulp
        .src('src/**/*js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});

gulp.task('jsx', function() {
    return gulp
        .src('src/web/**/*jsx')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(babel())
        .pipe(gulp.dest('dist/web'))
        
});

gulp.task('webpack', function() {
    return gulp
        .src('./src/web/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('build', ['jsx', 'es6', 'webpack']);
gulp.task('default', ['build']);