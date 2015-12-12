import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import yargs from 'yargs'
// var filesystem = require('fs')
// var path = require('path')

// Import the data files
import arrayz from './data/array-list'
import datez from './data/date-list'
import domz from './data/dom-list'
import functionz from './data/functions-list'
import jsonz from './data/json-list'
import mathz from './data/math-list'
import objectz from './data/objects-list'
import regexz from './data/regex-list'
import stringz from './data/strings-list'
import otherz from './data/other-list'

const entry = {
  arrayz: arrayz,
  datez: datez,
  domz: domz,
  functionz: functionz,
  jsonz: jsonz,
  mathz: mathz,
  objectz: objectz,
  regexz: regexz,
  stringz: stringz,
  otherz: otherz
}

const argv = yargs
  .usage('Usage: -D [string] -F [num]')
  .argv

console.log( entry[argv.D][argv.F - 1] )

module.exports = {

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    entry[argv.D][argv.F - 1]
  ],

  output: {
    path: __dirname,
    filename: 'bundlez.js'
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
      }
      // {
      //   test: /\.js$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // }
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
