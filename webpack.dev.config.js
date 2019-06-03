'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './examples/app.js',
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    // libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 支持 js 和 jsx
        exclude: [
          path.resolve(__dirname, 'node_modules'), // src 目录下的才需要经过 babel-loader 处理
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

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html'
    }),
    // new ExtractTextPlugin('index.css'),
  ],
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
  },
  devServer: {
    host: '0.0.0.0',
    port: 3003,
    proxy: {},
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/',
    // before(app) {
    //   // 返回模拟请求数据
    //   Object.keys(mockUrlObj).forEach((key) => {
    //     const [type, url] = key.split(' ');
    //     app.use(url, bodyParser.json());
    //     if (type === 'GET') {
    //       app.get(url, mockUrlObj[key]);
    //     } else if (type === 'POST') {
    //       app.post(url, mockUrlObj[key]);
    //     }
    //   });
    // },
    disableHostCheck: true   // 解决内网穿透之后 invalid Header 问题
  }
}