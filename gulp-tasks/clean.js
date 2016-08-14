var gulp       = require('gulp'),
		webpack    = require('webpack-stream'),
		sourcemaps = require('gulp-sourcemaps'),
		_plumber   = require('gulp-plumber'),
		_delete    = require('rimraf'),
		_log       = require('gulp-notify'),
		_if        = require('gulp-if'),
		cnf        = require('../gulp.config.js');

gulp.task('clean', function (cb) {
	_delete(cnf.path.clean, cb);
});