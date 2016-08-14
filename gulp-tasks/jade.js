var gulp       = require('gulp'),
		jade       = require('gulp-jade'),
		sourcemaps = require('gulp-sourcemaps'),
		_plumber   = require('gulp-plumber'),
		_log       = require('gulp-notify'),
		_if        = require('gulp-if'),
		cnf        = require('../gulp.config.js');

gulp.task('jade', function () {

	return gulp.src(cnf.path.src.jade)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'JADE',
						message:err.message
					};
				})
		}))

		.pipe(_if(cnf.is('dev'),sourcemaps.init()))

		.pipe(jade({
			pretty: true,
		}))

		.pipe(_if(cnf.is('dev'),sourcemaps.write()))

		.pipe(gulp.dest(cnf.path.dist.html))
});