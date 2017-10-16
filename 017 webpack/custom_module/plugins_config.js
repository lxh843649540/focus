const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const purifyCssPlugin = require('purifycss-webpack');
const glob = require('glob');
const path = require('path');
const plugins = [
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
    new purifyCssPlugin ({
        paths: glob.sync(path.join(__dirname, 'src/*.html'))
    })
];
module.exports = plugins;
