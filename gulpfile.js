var browserify  = require('browserify');
var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var source      = require('vinyl-source-stream');
var webserver   = require('gulp-webserver');

gulp.task('bundle', function() {
  return browserify({
    entries: ['index.js']
  })
  .bundle()
  .pipe(source('foxbox-connect.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(['./lib/**/*.js', './index.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('webserver', function() {
  gulp.src('.')
      .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
      }));
});

gulp.task('default', ['lint', 'bundle']);
