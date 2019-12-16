var path=require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var config={
	entry:{
		main:'./main'
	},
	output:{
		path:path.join(__dirname,'./dist'),
		publicPath:'/dist/', //公共资源所在位置
		filename:'main.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options:{
					loaders:{
						css:ExtractTextPlugin.extract({
							use:'css-loader',
							fallback:'vue-style-loader'
						})
					}
				}
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader:'url-loader?limit=1024'
			},
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					use:'css-loader',
					fallback:'style-loader'
				})
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new ExtractTextPlugin("style.css")
	]
};
module.exports=config;