const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')('/assets/');

module.exports = function () {
  return webpackMerge(commonConfig, {
    devtool: "source-map",
    plugins: []
  });
};
