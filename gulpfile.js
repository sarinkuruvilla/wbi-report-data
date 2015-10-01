var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    // Plugins
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    less   = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat');




// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("src/js/*.js", ['lint']);
    gulp.watch("*.html").on('change', browserSync.reload);
});



// Lint Task & auto-inject into browsers
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src('src/less/*.less') 
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['lint', 'less', 'serve']);