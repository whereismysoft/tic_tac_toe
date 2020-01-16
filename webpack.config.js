const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CONFIGURATION_VARIABLES = require('./configuration/variables')

module.exports = {
    // webpack 4 takes '/src/index.js' by default
    // entry: path.join(__dirname, '/src/index.js'),
    // output file by default is './dist/main.js'
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/plugin-proposal-class-properties",
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          modules: true,
                          localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            constants: path.resolve(__dirname, 'src/constants')
        }
    },
    devServer: {
        inline: true,
        hot: true,
        publicPath: '/',
        port: 9000,
        historyApiFallback: true,
        watchContentBase: true,
        open: true
    },
    plugins:[
        new webpack.DefinePlugin(CONFIGURATION_VARIABLES),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            inject: 'body'
        })
    ]
 }