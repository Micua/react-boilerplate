/*
 * @Author: iceStone
 * @Date:   2015-11-27 11:00:28
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-11-27 12:32:56
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8808',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: './bundle.js'
  },
  extensions: ['', '.js', '.jsx', '.json', '.scss'],
  devtool: "source-map", // or "inline-source-map"
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.s[c|a]ss$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'style!css!sass?sourceMap'
    }]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new openBrowserPlugin({
        url: 'http://localhost:8808'
      })
    ]
    //,
    // devServer: {
    //   historyApiFallback: true,
    //   devtool: 'eval',
    //   hot: true,
    //   inline: true,
    //   progress: true,
    //   colors: true,
    //   contentBase: './src',
    //   port: 8808
    // }
};
