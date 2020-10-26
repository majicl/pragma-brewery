const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const copyPlugin = new CopyPlugin({
  patterns: [
    { from: "./assets/images", to: "./images" },
    { from: "./assets/css", to: "./css" },
    {
        from: "./assets/fonts",
        to: "./fonts"
      }
  ]
});
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./assets/layout.html",
  filename: "./index.html"
});

module.exports = () => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/" 
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
      ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      port: 3000
    },
    plugins: [htmlPlugin, copyPlugin]
  };
};
