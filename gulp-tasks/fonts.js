var gulp     = require('gulp'),
		_plumber = require('gulp-plumber'),
		_log     = require('gulp-notify'),
		_if      = require('gulp-if'),
		cnf      = require('../gulp.config.js');

gulp.task('fonts', function () {

	return gulp.src(cnf.path.src.fonts)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'FONTS',
						message:err.message
					};
				})
		}))

		.pipe(gulp.dest(cnf.path.dist.fonts))
});