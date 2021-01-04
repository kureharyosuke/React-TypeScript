const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production : 'production'
  devtool: "eval", // production : 'hidden-source-map'
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader", // or : "ts-loader"
      },
    ],
  },
  plugins: [],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
