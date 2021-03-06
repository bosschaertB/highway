// Webpack
require('webpack');

// Modules
const path = require('path');

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// Configuration
module.exports = {
  mode: 'production',
  entry: {
    'highway': path.resolve(__dirname, 'src/index.js'),
    'highway.min': path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Highway',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min.js$/
      })
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.min.js$/
    })
  ]
};
