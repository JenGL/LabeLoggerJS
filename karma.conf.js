const webpackConfig = require('./webpack.config.js')();
const webpack = require('webpack');

webpackConfig.plugins = webpackConfig.plugins.filter(function (plugin) {
  return !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
});

webpackConfig.devtool = '';

webpackConfig.entry = "";

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-ajax', 'jasmine'],
    files: [
      'tests/**/*.test.js'
    ],
    exclude: [],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,

    preprocessors: {
      'tests/**/*.js': ['webpack']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },

    babelPreprocessor: {
      options: {
        presets: [['es2015', {
          "modules": false
        }]],
        sourceMap: 'inline'
      }
    }
  });
};
