const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
   plugins: [
	   new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
	     title: '2222fff'
     })
   ],
};