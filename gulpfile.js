var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    jshint     = require('gulp-jshint'),
    less       = require('gulp-less'),
    sourcemap = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['jshint']);
	gulp.watch('src/less/**/*.less', ['less'])
});

gulp.task('less', function() {
	return gulp.src('src/less/framework.less')
		.pipe(sourcemap.init())
		.pipe(less())
		.pipe(sourcemap.write('./'))
		.pipe(gulp.dest('dist/css'));
});