var webpack = require('webpack');
var path = require('path');


// Webpack Config
var webpackConfig = {
  entry: {
    'main': './client/test.ts',
  },

  output: {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, './public'),
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader'
        ]
      }
    ]
  }

};


module.exports = webpackConfig;