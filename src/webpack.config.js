const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const path = require('path')

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'game.js')
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public')
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackTagsPlugin({ scripts: ['somefile.js'], publicPath: false })
  ]
}
