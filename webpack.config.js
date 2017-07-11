var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),


    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'app.bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","react", "stage-0"],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        publicPath: "/",
        historyApiFallback: true,
        compress: true,
        stats: "errors-only",
        open: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'CINDER',
            hash: true,
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}