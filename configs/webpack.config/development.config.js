const { mergeWithCustomize } = require('webpack-merge')
const base = require('./base.config')

const _module = {
  rules: [
    {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        cache: true,
        quiet: true
      }
    }
  ]
}

const devtool = 'eval-source-map'

module.exports = mergeWithCustomize({ 'module.rules': 'prepend' })(base, {
  module: _module,
  devtool
})