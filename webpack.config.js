const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [{
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000'
    }]
  }
};