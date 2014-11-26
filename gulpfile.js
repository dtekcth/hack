var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-html-minifier'),
	del = require('del');

var dest = 'build/';

gulp.task('default', ['assets', 'css', 'js', 'html']);

gulp.task('clean', function() {
	del(dest);
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
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(dest));
});
