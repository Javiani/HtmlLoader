import {optimize} from 'webpack'

export default {

	devtool: 'source-map',
	entry : './index.js',

	output: {
		path: `${__dirname}/dist/`,
		filename: 'html-loader.js',
		publicPath: './dist/',
		libraryTarget:'umd',
		library:'htmlLoader',
		umdNamedDefine :true
	},

	plugins :[].concat(
		new optimize.UglifyJsPlugin({ compress :{ warnings:false }, minimize :true })
	),

	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js$/,
			exclude: /node_modules/,
			query:{
				presets:['es2015']
			}
		}]
	}
}
