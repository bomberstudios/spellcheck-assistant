const path = require('path')
const pkg = require('./package.json')

module.exports = {
  target: 'es6',
  mode: 'production',
  entry: './dist/index',
  output: {
    chunkFormat: 'module',
    publicPath: '',
    filename: 'sketch.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'var',
    library: ['_sketch', 'assistants', pkg.name],
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve('@skpm/path'),
      fs: require.resolve('@skpm/fs'),
      process: require.resolve('@skpm/process'),
      util: require.resolve('@skpm/util'),
      buffer: require.resolve('@skpm/buffer'),
    },
  },
}
