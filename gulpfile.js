var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create(),
  del = require('del'),
  shell = require('gulp-shell');


gulp.task('clean', function() {
  del('app*.js*');
});


// Found in http://blog.webbb.be/use-jekyll-with-gulp/
gulp.task('jekyll', function (gulpCallBack){
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
  jekyll.on('exit', function(code) {
    gulpCallBack( code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code) ;
  });
});

//https://nvbn.github.io/2015/06/19/jekyll-browsersync/
// Task for building blog when something changed:
//gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// Or if you don't use bundle:
gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('sass', function () {
  return gulp.src('css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('_site/css'));
});

// Task for serving blog with Browsersync
gulp.task('serve', function () {
  browserSync.init({server: {baseDir: '_site/'}});
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);

//gulp.task('concatScripts', function() {
//  return gulp.src([
//    'js/helpers.js',
//    'js/page-nav.js',
//    'js/site-nav.js'
//  ]).pipe(maps.init())
//    .pipe(concat('app.js'))
//    .pipe(maps.write('./'))
//    .pipe(gulp.dest('./'));
//});
//
//gulp.task('uglify', ['concatScripts'], function() {
//  return gulp.src('app.js')
//    .pipe(uglify())
//    .pipe(rename('app.min.js'))
//    .pipe(gulp.dest('./'));
//});
