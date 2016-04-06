var gulp = require('gulp');
var ts = require('gulp-typescript');
var paths = require('../app-manifest');
var tsProject = ts.createProject('tsconfig.json');
var dest = require('./dest');
(function () {
    var taskName = 'typeScript';

    gulp.task(taskName, [], function(){
        return gulp.src(paths.ts)
            .pipe(ts(tsProject))
            .pipe(dest(''));
    });



    module.exports = taskName;
})();