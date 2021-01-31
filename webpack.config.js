const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/javascript/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns CSS into CommonJS
          "sass-loader" // 1. Turns Sass into CSS
        ]
      }
    ]
  }
}
