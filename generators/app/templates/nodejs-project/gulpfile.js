var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:8000/",
    port: 8080,
    notify: false
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'api/index.js',
    ignore: [
      'gulpfile.js',
	  'dist/',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['../angular-project/dist/index.html'], reload);
});
