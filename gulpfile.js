var gulp = require('gulp');
var wait = require('gulp-wait'); 
var sass = require('gulp-sass'); 

gulp.task('style', function() {
    gulp.src('./src/sass/app.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest('./css'));
}); 

gulp.task('watch', function() {
    // Any folder or file with .scss, run the 'style' task
    gulp.watch('./src/sass/**/*.scss', ['style']); 
}); 