const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('compile', function () {
    return gulp.src('./src/scss/base.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('compile', 'minify'));
});

gulp.task('minify', () => {
    return gulp.src('./dist/css/')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', gulp.series('compile' , 'minify'));
