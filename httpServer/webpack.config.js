/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');

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

module.exports = {
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
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
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
