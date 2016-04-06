var gulp = require('gulp');
var del = require('del');
var sass = require('./gulp/sass');
var typeScript = require('./gulp/type-script');
var paths = require('./app-manifest');

gulp.task('clean', [], function(){
    return del('./dist/*');
});

gulp.task('default', ['clean', sass, typeScript], function () {
    // place code for your default task here
});


gulp.task('watch', ['default'], function () {
    gulp.watch(paths.styles.app, [sass]);
    gulp.watch(paths.ts, [typeScript]);
});

