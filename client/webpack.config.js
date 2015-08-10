var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/app.js'
  ],

  publicPath: "/assets/",

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/client/'
  },

  plugins: [
    new webpack.IgnorePlugin(new RegExp("^(ipc|remote)$")),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {

    loaders: [

      { test: /\.json$/,
        loader: "json-loader" },

      { test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname),
        exclude: /node_modules/ },

      { test: /\.svg$/,
        loader: "file-loader" },


    ]
  }
};
