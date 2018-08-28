module.exports = {
  mode: 'development',
  entry: {
    index: './app'
  },
  output: {
   filename: './bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
 };