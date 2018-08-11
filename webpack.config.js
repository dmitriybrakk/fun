const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    `${APP_DIR}/index.js`
  ],
  output: {
    path: BUILD_DIR,
    filename: '[hash].js',
  },
  devServer: {
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env'],
            plugins: ['transform-class-properties', 'babel-plugin-transform-react-jsx', 'babel-plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      './node_modules/'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
