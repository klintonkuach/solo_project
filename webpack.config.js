// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');

import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

export default {
    mode: 'development',
    entry: './client/src/index.jsx',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './client/src/index.html',
        filename: './index.html',
      }),
      new CopyPlugin([
        { from: './client/src/style.css' },
        { 
          from: './client/assets',
          to: './assets'
        },
      ])
    ],
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(process.env.CLIENT_PORT || 'development')
  // }),
    // devServer: {
    //   publicPath: '/',
    //   proxy: {
    //     '/goals': { target: 'http://localhost:8080'},
    //   },
    // },
    // devtool: 'eval-source-map',
  };



