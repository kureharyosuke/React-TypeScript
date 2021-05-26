const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map : 프로덕션
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  entry: {
    app: "./client", // client을 통해서, app.js 만들어낼 것
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts .tsx 파일을 발견하면,
        loader: "ts-loader", // ts-loader를 통해서, 옛날문법을 반환하겠다.
      },
    ],
  },
  plugins: [],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  }, // 뽑아내는 건 output에서
};
