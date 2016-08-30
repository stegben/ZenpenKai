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
  loaders: [
    'style-loader',
    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
  ],
  exclude: /node_modules/   // 不要處理 3rd party 的 code
});

module.exports = config;
