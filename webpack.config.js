const path = require('path');

module.exports = {
  entry: './source/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
}
