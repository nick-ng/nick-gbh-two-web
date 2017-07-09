const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Nick&rsquo;s Guildball Health Tracker 2',
    favicon: `${__dirname}/favicon.ico`,
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
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/entry.jsx'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:6]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', ['env', {
            targets: {
              browsers: ['chrome >= 23', 'safari >= 4'],
            },
          }]],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins,
};
