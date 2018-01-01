const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main',
    background: './src/background',
    popup: './src/popup',
    content: './src/content',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './', 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.css'],
    modules: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // Copy manifest.json
    new CopyWebpackPlugin([
      {
        from: './manifest.json',
        transform: function(content, path) {
          return Buffer.from(
            JSON.stringify({
              description: process.env.npm_package_description,
              version: process.env.npm_package_version,
              ...JSON.parse(content.toString()),
            })
          );
        },
      },
      {
        from: 'src/assets',
        to: 'assets',
      },
    ]),
    // Generate html files for main and popup components
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'main', 'index.html'),
      filename: 'main.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup', 'index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  devtool: 'source-map',
};
