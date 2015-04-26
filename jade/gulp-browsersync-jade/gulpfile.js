// Define project paths.
// Note: all of these are relative to the project root.
var projectPaths = {
    scssSources: 'src/scss',
    outputRoot: 'output'
};

// Import required dependencies.
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    browserSyncReload = browserSync.reload,
    sass = require('gulp-sass'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat');

var browserSyncConfig = {
    server: {
        baseDir: './' + projectPaths.outputRoot
    },
    files: [
        projectPaths.outputRoot + '/css/*.css',
        projectPaths.outputRoot + '/*.html',
        projectPaths.outputRoot + '/js/*.js'
    ]
};

gulp.task('sass', function() {
   return gulp.src(projectPaths.scssSources + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(projectPaths.outputRoot + '/css'))
        .pipe(filter('**/*.css'))
        .pipe(browserSyncReload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync(browserSyncConfig);
});


gulp.task('copy-html', function() {
   gulp.src(['./src/html/**/*.html'])
        .pipe(gulp.dest('./output/'));
});

gulp.task('watch', function() {
    gulp.watch(projectPaths.scssSources + '/*.scss', ['sass']);
    
    gulp.watch('src/html/**/*.html', ['copy-html']);
});

gulp.task('default', ['sass', 'copy-html', 'browser-sync', 'watch']);
