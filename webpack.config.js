const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }/*,
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100
  }*/
};
