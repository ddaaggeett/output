const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackAnybarPlugin = require('webpack-anybar-plugin').default;

const basePath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../.build');

module.exports = {
  target: 'node',
  context: __dirname,
  cache: true,
  entry: path.join(basePath, '/server/entry.server'),
  output: {
    path: buildPath,
    filename: 'server.bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
      extensions: ['.js', '.jsx'],
    // extensions: ['', '.js', '.jsx'],

    // root: basePath,
    modules: [
        basePath,
        "node_modules"
    ],

    alias: {
      utils: path.join(basePath, '/utils')
    }
  },
  module: {

    // loaders: [
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: basePath
      }
    ]

  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building server bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built server in ${t}.`));
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      BUILD_TIME: JSON.stringify((new Date()).getTime())
    }),
    new WebpackAnybarPlugin({
      port: 1738
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
            context: __dirname
        },
        debug: true
    })
  ],
  externals: [
    {
      winston: 'commonjs winston',
      express: 'commonjs express',
      later: 'commonjs later',
      '@horizon/server': 'commonjs @horizon/server'
    }
  ]
};
