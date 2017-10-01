const path = require('path');
// const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: {
		entry: './src/entry.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				}]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 400000
					}
				}]
			}
		]
	},
	plugins: [
		// new uglifyjsPlugin(),
		new cleanPlugin(['dist']),
		new htmlPlugin ({
			title: 'webpack',
			minify: {
				removeAttributeQuotes: true
			},
			hash: true,
			template: './src/index.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: '192.168.0.103',
		port: 1702,
		compress: true
	}
};