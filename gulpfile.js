const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const stylus = require('gulp-stylus');
// const watch = require('gulp-watch');

// Static server
gulp.task('browsersync', function() {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('stylus', function () {
  return gulp.src('./styl/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function(){
    gulp.watch('./styl/*.styl', ['stylus']);
});

gulp.task('default', ['browsersync','stylus','watch']);
