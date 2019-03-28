// const path = require('path');
const devConfig = require('./config/webpack.dev')

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
    //   config.devtool = 'source-map';
        return devConfig
    }
  
    // if (argv.mode === 'production') {
    //   //...
    // }
  
    return config;
  };