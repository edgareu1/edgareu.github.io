const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/javascript/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
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
