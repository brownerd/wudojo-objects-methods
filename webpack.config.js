var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var yargs = require('yargs')
// var filesystem = require('fs')
// var path = require('path')
// var files = require('./data/file-list')

var argv = yargs
  .usage('Usage: -f [num]')
  .argv

module.exports = {
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    './index.js',
  ]
  output: {
      filename: './dist/scripts/bundle.js'
  },
  devtool: 'source-map',
  // eslint: {
  //   configFile: './.eslintrc.js'
  // },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.jsx?$/,
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0'],
          }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
      extensions: [ '', '.js', '.json', '.jsx']
  },
  plugins: [
    // Serve bundle from localhost:8080
    // Launch in canary automatically
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
      browser: 'google chrome canary'
    }),
    // Dynamically generate an index.html page
    // Bundle will be automatically added as a script
    new HtmlWebpackPlugin()
  ]
};
