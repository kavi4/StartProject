var gulp = require('gulp'),
		cnf  = require('./gulp.config.js'),
		rDir = require('require-dir')('./gulp-tasks');

gulp.task('build',['fonts','img','jade','sass','scripts']);

gulp.task('watch', function(){
	gulp.watch(cnf.path.watch.jade,['sass']);
	gulp.watch(cnf.path.watch.sass,['jade']);
	gulp.watch(cnf.path.watch.js,  ['scripts']);
	gulp.watch(cnf.path.watch.img, ['img']);
});

gulp.task('default',['build','watch']);