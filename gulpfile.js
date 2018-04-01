const postcss = require('gulp-postcss');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const env = require('postcss-preset-env');

const paths = {
  css: {
    src: 'src/css/style.css',
    dest: 'static/css/',
  },
};

function build() {
  gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      env({
        browsers: 'last 2 versions',
        features: {
          'css-variables': { preserve: false },
          'mediaqueries-custom-mq': true,
        },
      }),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest));
}

gulp.task('build', build);
