const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; 
const isProd = !isDev;
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

//console.log('is dev: ', isDev)
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'}
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserPlugin()
    ]
  }
  return config;
}

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),// './index.js', //entry point
    analytics: path.resolve(__dirname, 'src', 'js', 'analytics.js'),//'./analytics.js'
},
  output: {
    filename: filename('js'), //webpack result
    path: path.resolve(__dirname, 'dist') //result path (from current dir)
  },
  resolve: {
    extensions: ['.js', '.json', '.png'], //extensions webpack 
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
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
      {filename: filename('css')}
    )
  ],
  module: {
    rules: [{
      test: /\.css$/, 
      use: [{
        loader: MiniCssExtractPlugin.loader, 
        options: {
          //hmr: process.env.NODE_ENV === 'development'
          hmr: isDev, //hot module replacement only for development mode mode
          reloadAll: true
        },},
        'css-loader']}, //['style-loader', 'css-loader']
        {
          test: /\.less$/, 
          use: [{
            loader: MiniCssExtractPlugin.loader, 
            options: {
              //hmr: process.env.NODE_ENV === 'development'
              hmr: isDev, //hot module replacement only for development mode mode
              reloadAll: true
            },},
            'css-loader',
            'less-loader']},
        {
          test: /\.sass|scss$/, 
          use: [{
            loader: MiniCssExtractPlugin.loader, 
            options: {
              //hmr: process.env.NODE_ENV === 'development'
              hmr: isDev, //hot module replacement only for development mode mode
              reloadAll: true
            },},
            'css-loader',
            'sass-loader']},
      {test: /\.(png|jpg|svg|gif|webp)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|ttf)$/, use: ['file-loader']},
      {test: /\.xml$/, use: ['xml-loader']},
      {test: /\.csv$/, use: ['csv-loader']}
  ]
  }
}