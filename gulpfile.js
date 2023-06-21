const { src, dest, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

/**************** CSS task ****************/
const css = () => {
  return src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('src/assets/css'))
}
exports.default = series(css)
