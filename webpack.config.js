var webpack = require('webpack'),
		cnf     = require('./gulp.config.js');

module.exports = {

	context:__dirname+'/src/js',

	entry:{
		index:'./index',
	},

	output:{
		path:__dirname+'/build/',
		publicPath:'build/',
		filename:'[name].js',
	},

	watchOptions:{
		aggregateTimeout:100
	},

	devtool:cnf.is('prod') ? null : 'inline-source-map',

	plugins:[
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV:'dev'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			minChunks:2,
		}),
	],

	module:{

		loaders:[
			{
				test  :/\.js$/,
				loader:'babel?presets[]=es2015,compact=false',
			},
		]
	},

	externals:{
		$:'jQuery',
	}

}

if(cnf.is('prod')){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false,
				drop_console:true,
				unsafe:true
			}
		})
	)
}