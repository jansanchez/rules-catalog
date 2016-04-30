module.exports = {
  entry: {
    index: ['./source/js/index.jsx']
  },
  output: {
    path: './public/static/js/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
