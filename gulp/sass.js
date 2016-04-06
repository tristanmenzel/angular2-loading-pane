var gulp = require('gulp');
var concat = require('gulp-concat');
var pleeease = require('gulp-pleeease');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var paths = require('../app-manifest');
var dest = require('./dest');

(function () {
    var taskName = 'sass';

    gulp.task(taskName, function () {
        return gulp.src(paths.styles.app)
            .pipe(debug())
            .pipe(sourcemaps.init())
            .pipe(sass({
                includePaths: ['app/shared/common']
            }))
            .pipe(pleeease({
                sass: false,
                rebaseUrls: false
            }))
            .pipe(concat("app.min.css"))
            .pipe(sourcemaps.write('./maps/'))
            .pipe(dest(''));
    });

    module.exports = taskName;
})();