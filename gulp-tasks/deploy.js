var gulp       = require('gulp'),
		ftp        = require('gulp-ftp'),
		_plumber   = require('gulp-plumber'),
		_log       = require('gulp-notify'),
		_if        = require('gulp-if'),
		cnf        = require('../gulp.config.js');

gulp.task('deploy', function () {

	return gulp.src(cnf.path.deploy)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'DEPLOY',
						message:err.message
					};
				})
		}))

		.pipe(ftp(cnf.deploy));
});