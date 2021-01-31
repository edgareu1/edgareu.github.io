module.exports = {
  plugins: [
    "autoprefixer",
    // Recommended by @jamiebuilds:
    // browsers: [">0.25%", "not ie 11", "not op_mini all"]
    ["postcss-preset-env", { browsers: "last 2 versions"}]
  ]
}
