const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // webpack 4 takes '/src/index.js' by default
    // entry: path.join(__dirname, '/src/index.js'),

    // output file by default is './dist/main.js'
    output: {
        publicPath: "/"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
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
        // alias: {
        //     [name]: path.resolve(__dirname, '[path]'),
        // }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            inject: 'body'
        })
    ]
 }