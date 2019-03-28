const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            inject: 'body'
        })
    ]
};

module.exports = devConfig;