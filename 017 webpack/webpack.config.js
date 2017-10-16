const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const purifyCssPlugin = require('purifycss-webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
//引入入口文件模块
const entry = require('./custom_module/entry_config');
console.log(encodeURIComponent(process.env.type));
if(process.env.type == "company") {
	var website = {
		publicPath:'http://192.168.1.116:1702/'
	};
}else{
	var website = {
		publicPath:'http://192.168.0.103:1702/'
	};
}
var website = {
	publicPath:'http://192.168.1.116:1702/'
};
module.exports = {
    devtool: 'source-map',
	entry: entry.path,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
        publicPath: website.publicPath
	},
	module: {
		rules: [
			{// css分离
				test: /\.css$/,
				use: extractTextPlugin.extract({
				    fallback: 'style-loader',
                    use: [{
				        loader: 'css-loader',
                        options: {importLoader: 1}
                        }, 'postcss-loader'
                    ]
                })
			},{// 图片处理
				test: /\.(jpg|png|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 50000,
						outputPath: 'images/'
					}
				}]
			},{// HTML 分离
				test: /\.(htm|html)$/i,
				use: ['html-withimg-loader']
			},{// Less文件的打包和分离
				test: /\.less$/,
				use: extractTextPlugin.extract({
						use: [{
							loader: 'css-loader'
						}, {
							loader: 'less-loader'
						}],
						fallback: 'style-loader'
					}
				)
			},{// es6 转es5
		        test: /\.(jsx|js)$/,
                use: [{
                        loader: 'babel-loader',
		        }],
                exclude: /node_modules/
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
		// 消除未使用的CSS
		new purifyCssPlugin ({
			paths: glob.sync(path.join(__dirname, 'src/*.html'))
		}),
		// 引入第三方框架（jQuery）
		new webpack.ProvidePlugin({
			$: 'jquery'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: '192.168.1.116',
		port: 1702,
		compress: true
	}
};