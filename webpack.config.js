const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'js', 'index.js'),// './index.js', //entry point
    analytics: path.resolve(__dirname, 'src', 'js', 'analytics.js'),//'./analytics.js'
},
  output: {
    filename: '[name].[contenthash].js', //webpack result
    path: path.resolve(__dirname, 'dist') //result path (from current dir)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|svg|gif|webp)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|ttf)$/, use: ['file-loader']}
  ]
  }
}