const path = require('path');

module.exports = {
  entry: './ferro.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ferro.min.js',
    library: 'Ferro',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    gsap: 'gsap'
  }
}; 