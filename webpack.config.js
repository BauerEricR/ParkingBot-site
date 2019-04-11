var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/source/site.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
entry: __dirname + '/source/site.js',
module: {
  rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000'
    }

    ]
  },
output: {
  filename: 'transformed.js',
  path: __dirname + '/build'

  },
  plugins: [HTMLWebpackPluginConfig]
};
