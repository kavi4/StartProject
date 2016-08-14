
module.exports = {

	is:function(build_mode){// Conclution: NODE_ENV === dev||prod 
		return build_mode === (process.env.NODE_ENV||'dev');
	},

	path:{

		dist:{
			html:'./build/',
			css:'./build/css',
			js:'./build/js',
			img:'./build/img',
			fonts:'./build/fonts',
		},

		src:{
			jade:'./src/jade/*.jade',
			sass:'./src/sass/*.scss',
			js:'./src/js/*.js',
			img:'./src/img/*.*',
			fonts:'./src/fonts/**/*.*',
		},

		watch:{
			jade:'./src/jade/**/*.jade',
			sass:'./src/sass/**/*.scss',
			js:'./src/js/**/*.js',
			img:'./src/img/**/*.*',
			fonts:'./src/fonts/**/*.*',
		},

		deploy:'./build',

		clean:'./build'

	},

	server:{
		server: { baseDir: "./dist"},
		tunnel: false,
		host: 'localhost',
		browser:'chrome',
		port: 8080,
		logPrefix: "devserver"
	},

	deploy:{
		host: 'website.com',
		user: 'user',
		pass: 'pass'
	}

};
