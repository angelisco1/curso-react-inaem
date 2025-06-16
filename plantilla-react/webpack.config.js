const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')
const publicPath = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: outputPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Curso de React',
      template: path.join(publicPath, 'index.html')
    })
  ]
}