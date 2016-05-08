/* eslint-disable */

const webpack = require('webpack');
let config = require('./webpack.config.base');

config.devtool = 'cheap-module-eval-source-map';
config.output.publicPath = ''
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];
config.entry.push('webpack-hot-middleware/client');
config.module.loaders.push({
  test: /\.css$/,  // 針對 css 檔
  loaders: ['style', 'css'],
  exclude: /node_modules/   // 不要處理 3rd party 的 code
});

module.exports = config;
