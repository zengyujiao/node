const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 设置为开发模式（development），还可以设置为生产模式（production）
    mode:'development',
    // 配置需要处理的入口模块
    entry: './src/index.js',
    output: {
        // 把入口所有的模块打包进bundle.js文件里面
        filename: 'bundle.js',
        // 配置打包输出的地方
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // 处理后缀文件raw-loader加载器去把webpack括展一些功能
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.jade$/, use: 'jade-loader' },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss|css$/,
                use: [{
                  loader: "style-loader"
                }, {
                  loader: "css-loader"
                }, {
                    loader: "sass-loader",
                }]
            }
        ]
    },
    // plugins: [new HtmlWebpackPlugin()]
    plugins: [new HtmlWebpackPlugin({template:'./src/index.html'})]
};