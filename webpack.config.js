const path = require('path');
const webpack = require('webpack');

module.exports = function(publicPath, indexPath = './src/log_service.js') {
  return {
    entry: {
      main: ['babel-polyfill', indexPath],
    },
    output: {
      path: path.join(__dirname, 'dist/assets/'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].js',
      publicPath: publicPath
    },
    node: {
      fs: "empty"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [["es2015", {"modules": false}]],
              plugins: ['syntax-dynamic-import']
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      })
    ]
  };
};
