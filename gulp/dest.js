var gulp = require('gulp');
var paths = require('../app-manifest');

(function () {
    function dest(subFolder) {
        return gulp.dest(paths.dest + "/" + subFolder);
    }

    module.exports = dest;

})();