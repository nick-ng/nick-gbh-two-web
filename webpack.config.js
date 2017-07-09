const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Nick&rsquo;s Guildball Health Tracker 2',
    favicon: path.resolve(__dirname, 'favicon.ico'),
    template: './index.html',
    inject: 'true',
  }),
  new Dotenv({
    path: './.env', // Path to .env file (this is the default)
    safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
  }),
];
if (process.env.NODE_ENV === 'production') {
  console.log('Production build!'); // eslint-disable-line no-console
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));
}

module.exports = {
  entry: './src/entry.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins,
};
