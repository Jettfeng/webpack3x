const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");

const entry = require('./webpack_config/entry_webpack')

if(process.env.type== "build"){
    var website={
        publicPath:"http://xxxx.com/"
    }
}else{
    var website ={
        publicPath:"http://localhost:1018/"
    }
}

module.exports={
    devtool: 'source-map',
    //入口文件的配置项
    entry:entry.path,
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'[name].js',
        publicPath:website.publicPath
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        "less-loader",
                        'postcss-loader'
                    ],
                    // use: [
                    //     {
                    //         loader: "css-loader"
                    //     },
                    //     {
                    //         loader: "less-loader"
                    //     },
                    //     {
                    //         loader: "'postcss-loader'"
                    //     }
                    // ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        "sass-loader",
                        'postcss-loader'
                    ],
                    // use: [
                    //     {
                    //         loader: "css-loader"
                    //     },
                    //     {
                    //         loader: "sass-loader"
                    //     },
                    //     {
                    //         loader: "'postcss-loader'"
                    //     }
                    // ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test:/\.(png|jpg|gif)/ ,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/',
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader']
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                },
                exclude:/node_modules/
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true//是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash:true,//hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index.html'//template：是要打包的html模版路径和文件名称。
        }),
        new extractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        })
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1018
    }
}