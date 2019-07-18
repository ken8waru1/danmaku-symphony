const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib')
  }
};