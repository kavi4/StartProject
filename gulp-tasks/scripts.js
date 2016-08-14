var gulp       = require('gulp'),
		webpack    = require('webpack-stream'),
		sourcemaps = require('gulp-sourcemaps'),
		_plumber   = require('gulp-plumber'),
		_log       = require('gulp-notify'),
		_if        = require('gulp-if'),
		cnf        = require('../gulp.config.js');

gulp.task('scripts', function () {

	return gulp.src(cnf.path.src.js)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'JAVASCRIPT',
						message:err.message
					};
				})
		}))

		.pipe(webpack(require('../webpack.config.js')))

		.pipe(gulp.dest(cnf.path.dist.js))
});