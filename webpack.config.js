'use strict';

var
    fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    px2rem = require('postcss-px2rem'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ManifestPlugin = require('webpack-manifest-plugin'),
    extend = require('node.extend'),
    config = require('./config.js');

if(fs.existsSync('./config.mine.js')){
    config = extend(true, config, require('./config.mine.js'));
}
path.joinFormat = function(){
    var iArgv = Array.prototype.slice.call(arguments);
    var r = path.join.apply(path, iArgv);
    return r
        .replace(/\\+/g, '/')
        .replace(/(^http[s]?:)[\/]+/g, '$1//');
};

module.exports = {
     devServer:{
        host: '127.0.0.1',
        progress: true,
        colors: true,
        contentBase: config.localserver.root,
        port: 8888,
        // hot: true,
        // inline: true

    },
    //页面入口文件配置
    entry: {
        'flexLayout': ['flexlayout'],
        'boot': './src/boot/boot.js',
        'vender': ['zepto', 'lazyload']
    },
    //入口文件输出配置
    output: {
        path: './build/js',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test:/\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loaders: ['vue']
        }, {
            test:/\.jade$/,
            loaders: ['jade-loader']
        }, {
            test:/\.(png|jpg|gif)$/,
            loader: 'url?limit=10000&name=./build/images/[name].[ext]'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
        }, {
            test: path.join(__dirname, 'src/lib'),
            loader: 'imports?this=>window'
        }]
    },
    postcss: function(){
        return [px2rem({remUnit: 75}), autoprefixer];
    },
    resolve: {
        fallback: path.join(__dirname, 'node_modules'),
        root: './',
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            'flexlayout': path.join(__dirname, 'src/lib/flexlayout/flexlayout.js'),
            'lazyload': path.join(__dirname, 'src/lib/lazyload/zepto.lazyload.min.js'),
            'zepto': path.join(__dirname, 'src/lib/zepto/yymzepto.js'),
            'mixin': path.join(__dirname, 'src/scss/_mixin.scss')
        },
    },
    devtool: 'source-map',
    plugins: [
        // 样式分离插件
        new ExtractTextPlugin("../css/boot.css"),
        //html输出插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/boot/boot.jade'),
            filename: '../html/boot.html'
        }),

        new ManifestPlugin({
            fileName: '../assets/rev-manifest.json',
            basePath: ''
        })
    ]
};

