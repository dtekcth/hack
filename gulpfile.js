var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	minifyhtml = require('gulp-minify-html'),
	clean = require('gulp-clean');

var dest = 'build/';

gulp.task('default', ['assets', 'css', 'js', 'html']);

gulp.task('clean', function() {
	return gulp.src(dest, { read: false })
		.pipe(clean());
});

gulp.task('assets', function() {
	return gulp.src('assets/*')
		.pipe(gulp.dest(dest + 'assets/'));
});

gulp.task('css', function() {
	return gulp.src('css/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest(dest + 'css/'));
});

gulp.task('js', function() {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js/'));
});

gulp.task('html', function() {
	return gulp.src('*.html')
		.pipe(minifyhtml({ empty: true }))
		.pipe(gulp.dest(dest));
});
