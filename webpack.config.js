module.exports = {
  devtool: "eval-source-map",
  entry: "./src/js/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    proxy: {
      '/notes*': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      }
    ]
  }
};
