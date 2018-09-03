module.exports = {
  entry: {
    vendor: "./src/index.ts"
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [],
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  }
}