var loaders = require("./loaders");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/app/index.ts'],
  output: {
    filename: 'build.js',
    path: 'tmp'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/dd-ui/dist/fonts/dd-icon-font.woff', to: 'fonts' },
      { from: 'node_modules/dd-ui/dist/fonts/dd-icon-font.ttf', to: 'fonts' },
    ])
  ],
  devtool: "source-map-inline",
  module: {
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  }
};

