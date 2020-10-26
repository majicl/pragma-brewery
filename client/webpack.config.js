const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const copyPlugin = new CopyPlugin({
  patterns: [
    { from: './assets/images', to: './images' },
    { from: './assets/css', to: './css' },
    {
      from: './assets/fonts',
      to: './fonts'
    }
  ]
});
const htmlPlugin = new HtmlWebPackPlugin({
  template: './assets/layout.html',
  filename: './index.html'
});

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  output: {
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src/components'),
      handlebars: 'handlebars/dist/handlebars.js'
    }
  },
  devtool: 'source-map',
  plugins: [htmlPlugin, copyPlugin]
};
