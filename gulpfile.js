var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port: 80,
        root: '',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);