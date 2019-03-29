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
                loader: 'babel-loader'
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
        //     ui: path.resolve(__dirname, 'src/components/ui'),
        //     blocks: path.resolve(__dirname, 'src/components/blocks'),
        //     actions: path.resolve(__dirname, 'src/actions'),
        //     reducers: path.resolve(__dirname, 'src/reducers'),
        //     utils: path.resolve(__dirname, 'src/utils'),
        //     assets: path.resolve(__dirname, 'src/assets'),
        // }
    },
    // devServer: {
    //     inline: true,
    //     hot: true,
    //     publicPath: '/',
    //     port: 9000,
    //     historyApiFallback: true,
    //     watchContentBase: true
    // },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            inject: 'body'
        })
    ]
 }