const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    frontend: "./react_app/src/index.js",
  },
  output: {
    path: path.resolve("./django_react/app/frontend/static/frontend/"),
    filename: "[name]-[fullhash].js",
    publicPath: "static/frontend/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: "./django_react/webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
