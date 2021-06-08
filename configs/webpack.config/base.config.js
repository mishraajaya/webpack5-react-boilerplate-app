'use strict'

const path = require('path')

const context = path.resolve(__dirname, '../../')

const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const output = {
  path: path.join(__dirname, '../../dist'),
  filename: '[name].js'
}

const devServer = {
  port: 3000,
  watchContentBase: true
}

const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  modules: ['node_modules'],
  alias: {
    containers: path.join(context, '/src/containers'),
    components: path.join(context, '/src/components')
  }
}

const _module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /nodeModules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(css|scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    }
  ]
}

const plugins = [
  new HtmlWebpackPlugin({ template: './src/index.html' }),
  new ESLintPlugin({
    extensions: ["js", "jsx", "ts", "tsx"],
  })
]

module.exports = {
  output,
  resolve,
  devServer,
  module: _module,
  plugins
}