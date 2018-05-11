var _root = './root';

var gulp = require('gulp');
var concat = require('gulp-concat');
var fileSource = require('./gulp_task/filePath.js');
var sass = require('gulp-sass');

/*********** All file Source ************/

var _fileSource = new fileSource.FilePath()

/***************************************/

gulp.task('build', [
    'third-party-libs'
    , 'build-css'
    , 'build-script'
    , 'fonts'
], function () {

});

gulp.task('third-party-libs', function () {
    return gulp.src(_fileSource.getLibsPath())
        .pipe(concat('thirdParty.js'))
        .pipe(gulp.dest(_root + '/js/'));
});

gulp.task('build-css', function () {
    return gulp.src(_fileSource.getCssPath())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(_root + '/css/'));
});

gulp.task('build-script', function () {
    return gulp.src(_fileSource.getJsPath())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(_root + '/js/'));
});

gulp.task('fonts', function () {
    return gulp.src(_fileSource.getFonts())
        .pipe(gulp.dest(_root + '/fonts/'));
});