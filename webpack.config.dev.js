/* eslint-disable */

const webpack = require('webpack');
let config = require('./webpack.config.base');

config.devtool = 'cheap-module-eval-source-map';
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];
config.entry.push('webpack-hot-middleware/client');

module.exports = config;
