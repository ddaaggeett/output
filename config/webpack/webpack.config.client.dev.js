const webpack = require('webpack');
const defaultConfig = require('./webpack.config.client');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const _ = require('lodash');
const devProps = require('./devProps');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devConfig = _.assign(_.clone(defaultConfig), {
  devtool: 'source-map',
  entry: _.assign(_.clone(defaultConfig.entry), {
    app: _.union(
      [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${devProps.baseUrl}`,
        'webpack/hot/only-dev-server'
      ],
      defaultConfig.entry.app
    )
  }),
  output: _.assign(_.cloneDeep(defaultConfig.output), {
    publicPath: `http://127.0.0.1:${devProps.webpackPort}/static/`,
    pathinfo: true,
    crossOriginLoading: 'anonymous'
  }),
  plugins: (defaultConfig.plugins || []).concat([
    new ExtractTextPlugin({
        filename: "styles.css",
        disable: false,
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: true
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
            context: __dirname
        },
        debug: true
    }),
  ]),
  devServer: {
    publicPath: `${devProps.baseUrl}/static`,
    host: devProps.host,
    hot: true,
    historyApiFallback: true,
    contentBase: devProps.contentBase,
    port: devProps.webpackPort,
    stats: {
      colors: true,
      chunkModules: false,
      modules: false
    }
  }
});

const localCssConfig = devConfig.module.rules.find(
  l => l.name && l.name === 'local-css-config'
);

/*
TODO:
still in WebPack 1 format
*/
delete localCssConfig.name;
localCssConfig.loader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=lovli_[local]_[hash:base64:5]'
})

module.exports = devConfig;
