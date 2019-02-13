const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: ['awesome-typescript-loader']},
      {enforce: 'pre', test: /\.js$/, use: ['source-map-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}