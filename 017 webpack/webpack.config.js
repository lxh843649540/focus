const path = require('path');
// const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
var website = {
  publicPath: 'http://192.168.0.103:1702/'
};
module.exports = {
	entry: {
		entry: './src/entry.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
        publicPath: website.publicPath
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractTextPlugin.extract({
				    fallback: 'style-loader',
                    use: 'css-loader'
                })
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 40000
					}
				}]
			}
		]
	},
	plugins: [
		// new uglifyjsPlugin(),
		// new cleanPlugin(['dist']),
		new htmlPlugin ({
			title: 'webpack',
			minify: {
				removeAttributeQuotes: true
			},
			hash: true,
			template: './src/index.html'
		}),
        new extractTextPlugin('css/index.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: '192.168.0.103',
		port: 1702,
		compress: true
	}
};