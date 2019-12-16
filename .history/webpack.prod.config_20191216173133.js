var webpack=require('webpack');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var merge=require("webpack-merge");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpackBaseConfig=require("./webpack.config.js");
//清空基本配置的插件列表
webpackBaseConfig.plugins=[];

module.exports=merge(webpackBaseConfig,{
    output:{
        publicPath:'/dist',
        filename:'[name].[hash].js'
    },
    plugins:[
        new ExtractTextPlugin({
            //提取css 并重命名为带有20位的hash的唯一文件
            filename:'[name].[hash].css',
            allChunks:true
        }),
        //定义当前的node环境位生产环境
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        //提取模板,并保存入口文件html
        new HtmlWebpackPlugin({
            filename:'../index_prod.html',
            template:"./index.ejs",
            inject:false
        }),
        new new VueLoaderPlugin()
    ]
})