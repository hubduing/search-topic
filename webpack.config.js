const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"  
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin(
      {template: "./src/index.html"}
    )
  ],
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"]
      }
    ]
  }
}