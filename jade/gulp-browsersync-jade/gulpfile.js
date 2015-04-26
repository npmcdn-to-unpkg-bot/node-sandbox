// Define project paths.
// Note: all of these are relative to the project root.
var projectPaths = {
    scssSources: 'src/scss',
    wwwRoot: 'www'
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
        baseDir: './' + projectPaths.wwwRoot
    },
    files: [
        projectPaths.wwwRoot + '/css/*.css',
        projectPaths.wwwRoot + '/*.html',
        projectPaths.wwwRoot + '/js/*.js'
    ]
};

gulp.task('sass', function() {
   return gulp.src(projectPaths.scssSources + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(projectPaths.wwwRoot + '/css'))
        .pipe(filter('**/*.css'))
        .pipe(browserSyncReload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync(browserSyncConfig);
});


gulp.task('copy-html', function() {
   gulp.src(['./src/html/**/*.html'])
        .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function() {
    gulp.watch(projectPaths.scssSources + '/*.scss', ['sass']);
    
    gulp.watch('src/html/**/*.html', ['copy-html']);
});

gulp.task('default', ['sass', 'copy-html', 'browser-sync', 'watch']);
