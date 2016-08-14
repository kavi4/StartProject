var gulp       = require('gulp'),
		sass       = require('gulp-sass'),
		cssMin     = require('gulp-minify-css'),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefix = require('gulp-autoprefixer'),
		_plumber   = require('gulp-plumber'),
		_log       = require('gulp-notify'),
		_if        = require('gulp-if'),
		cnf        = require('../gulp.config.js');

gulp.task('sass', function () {

	return gulp.src(cnf.path.src.sass)

		.pipe(_plumber({
			errorHandler: _log.onError(function(err){
					return {
						title:'SASS',
						message:err.message
					};
				})
		}))

		.pipe(_if(cnf.is('dev'),sourcemaps.init()))

		.pipe(sass())

		.pipe(autoprefix({
			browsers: ['last 15 versions'],
			cascade: false
		}))

		.pipe(_if(cnf.is('prod'),cssMin()))

		.pipe(_if(cnf.is('dev'),sourcemaps.write()))

		.pipe(gulp.dest(cnf.path.dist.css))
});