/* eslint-disable */

const webpack = require('webpack');
let config = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.devtool = 'source-map';
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
    },
  }),
  new ExtractTextPlugin('style.css', { allChunks: true }),
];


module.exports = config;