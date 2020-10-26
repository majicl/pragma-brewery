const path = require("path");

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
      ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      port: 3000
    }
  };
};
