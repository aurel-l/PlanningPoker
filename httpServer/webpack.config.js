/* eslint-env node */
/* eslint no-process-env: 0 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');
const validateWebpackConfig = require('webpack-validator');

const pkg = require('./package.json');

const pathBuilder = directories => {
  directories.unshift(__dirname);
  return path.join.apply(null, directories);
};
const cssSettings = {
  modules: true,
  minimize: true,
  importLoaders: 1,
  sourceMap: true,
  localIdentName: '[name]__[local]___[hash:base64:5]',
};

const production = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    js: pathBuilder(['src', 'index.js']),
  },
  output: {
    path: pathBuilder(['dist']),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(!production),
      PROD: JSON.stringify(production),
      NAME: JSON.stringify(pkg.name),
      VERSION: JSON.stringify(pkg.version),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'style',
          `css?${JSON.stringify(cssSettings)}!postcss`
        ),
      },
    ],
  },
  postcss: [cssnext],
};

module.exports = validateWebpackConfig(config);
