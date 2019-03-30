const postcss = require('gulp-postcss');
const gulp = require('gulp');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const env = require('postcss-preset-env');

const paths = {
  css: {
    src: 'src/css/style.css',
    dest: 'static/css/',
  },
};

function build() {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      env(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest));
}

gulp.task('build', build);

gulp.task('watch', () => watch(paths.css.src).pipe(gulp.dest('build')));
