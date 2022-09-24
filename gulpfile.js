const gulp = require('gulp');const webp = require('gulp-webp');gulp.task('default', () => (gulp.src('./Img/明细.png').pipe(webp({quality: 75,preset: 'photo',method: 6})).pipe(gulp.dest('./Img/'))));
