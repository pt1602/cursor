const gulp = require('gulp');
const npmDist = require('gulp-npm-dist');

gulp.task('copy:libs', function () {
    return gulp.src(npmDist({
        copyUnminified: false,
        replaceDefaultExcludes: true,
        excludes: [
            'src/**/*',
            'examples/**/*',
            'example/**/*',
            'demo/**/*',
            'spec/**/*',
            'docs/**/*',
            'tests/**/*',
            'test/**/*',
            'Gruntfile.js',
            'gulpfile.js',
            'package.json',
            'package-lock.json',
            'bower.json',
            'composer.json',
            'yarn.lock',
            'webpack.config.js',
            'README',
            'LICENSE',
            'CHANGELOG',
            '*.yml',
            '*.md',
            '*.coffee',
            '*.ts',
            '*.less'
        ]
    }), {
        base: './node_modules'
    })
        .pipe(gulp.dest('./public/libs'));
});

gulp.task('default', gulp.series('copy:libs'));
