var gulp     = require('gulp'),
		_plumber = require('gulp-plumber'),
		_log     = require('gulp-notify'),
		_if      = require('gulp-if'),
		cnf      = require('../gulp.config.js');

gulp.task('img', function () {

	return gulp.src(cnf.path.src.img)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'IMAGES',
						message:err.message
					};
				})
		}))

		.pipe(gulp.dest(cnf.path.dist.img))
});