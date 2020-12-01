const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),// './index.js', //entry point
    analytics: path.resolve(__dirname, 'src', 'js', 'analytics.js'),//'./analytics.js'
},
  output: {
    filename: '[name].[contenthash].js', //webpack result
    path: path.resolve(__dirname, 'dist') //result path (from current dir)
  },
  resolve: {
    extensions: ['.js', '.json', '.png'], //extensions webpack 
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'}
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]}
    ),
    new MiniCssExtractPlugin(
      {filename: '[name].[contenthash].css'}
    )
  ],
  module: {
    rules: [
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}, //['style-loader', 'css-loader']
      {test: /\.(png|jpg|svg|gif|webp)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|ttf)$/, use: ['file-loader']},
      {test: /\.xml$/, use: ['xml-loader']},
      {test: /\.csv$/, use: ['csv-loader']}
  ]
  }
}