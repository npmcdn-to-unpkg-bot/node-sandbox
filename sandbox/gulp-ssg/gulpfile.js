var gulp = require('gulp'),
    markdown = require('gulp-markdown'),
    jade = require('gulp-jade');

gulp.task('markdown', function() {
    return gulp.src('./src/pages/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('./build'));
});

gulp.task('jade', function() {
    return gulp.src('./src/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./build/'));
});