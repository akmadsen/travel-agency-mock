/**
 * CPNT 262 - Final Assignment 
 * by Alex Madsen 
 * akmadsen522@gmail.com 
 * October 19, 2018 
 * 
 * This resource was carried over from the CPNT 260 final assignment 
 * using Gulp to compile SASS files. 
 */

 // Import Libraries 
var gulp = require('gulp');
var wait = require('gulp-wait'); 
var sass = require('gulp-sass'); 

// Task Definitions 
gulp.task('style', function() {
    gulp.src('./src/sass/app.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest('./css'));
}); 

gulp.task('watch', function() {
    // Any folder or file with .scss, run the 'style' task
    // This technique is called blobbing (note for self, sorry Heather)
    gulp.watch('./src/sass/**/*.scss', ['style']); 
}); 