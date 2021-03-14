const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const pages = glob.sync('pages/*.html');
const MiniCss = require('mini-css-extract-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
  mode: 'development',

  plugins: [
    new MiniCss({
      filename: 'style.css',
    }),
    new webpack.ProgressPlugin(),
    ...pages.map((el) => new HtmlWebpackPlugin({
        filename: el.replace(/^pages\//, ''),
        template: el,
        minify: false,
      })),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.png/,
        use: {
          loader: 'url-loader',
        },
      },

      {
        test: /\.(s*)css$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    open: true,
    host: 'localhost',
    contentBase: path.join(__dirname, 'dist'),
    openPage: 'main.html',
    port: 5000,
  },
};
