'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd',
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 支持 js 和 jsx
        exclude: [
          path.resolve(__dirname, 'node_modules'), // 
        ],
        loader: 'babel-loader',
      },
      { // 正常网页中的样式处理
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            },
          }],
        exclude: /node_modules/,
      }
    ]
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
}