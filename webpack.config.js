const path = require('path');

module.exports = {
  entry: './lib/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib')
  }
};