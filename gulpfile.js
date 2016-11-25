//require ����

var gulp = require('gulp');

var watch = require('gulp-watch');

var livereload = require('gulp-livereload');

var include = require("gulp-include");

var sass = require('gulp-sass');

// hello world ��� �ܼ־� ��� task

gulp.task('check', function() {
  return gulp.src(['*', 'js/*', 'css/*', 'html/*'])
      .pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*', ['check']);
  gulp.watch('js/*', ['check']);
  gulp.watch('css/*', ['check']);
  gulp.watch('html_src/**', ['include', 'check']);
});


gulp.task("include", function() {

  var main = gulp.src(['html_src/*.html'])
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));

  var sube = gulp.src(['html_src/sub/*.html'])
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));

});


gulp.task('sass', function(){

  return gulp.src('css_scss/*.scss')
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('css/'));

});

//gulp�� �����ϸ� default �� hello task ����

gulp.task("default", ['check','watch', 'include', 'sass']);