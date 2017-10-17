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
		publicPath:'http://192.168.0.104:1702/'
	};
}
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
		}),
        // 在dist的输出文件里第一行显示的提示内容
		new webpack.BannerPlugin('本webpack配置是由李小辉的创建的5')
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: '192.168.0.104',
		port: 1702,
		compress: true
	},
    watchOptions: {
        //检测修改时间，以毫秒为单位
        poll: 1000,
        //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
        aggregeateTimeout: 500,
        //不监听目录
        ignored: /node_modules/
    }
};