const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: "./src/index.js",
    portfolio: "./src/portfolio.js",
    portfolio_view: "./src/portfolioView.js",
    services: "./src/services.js",
    contact: "./src/contact.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: ["@babel/plugin-transform-runtime"]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: './assets/images',
          esModule: false,
        },
      },
      {
        test: /\.(pdf|md)$/i,
        loader: 'file-loader',
        options: {
          outputPath: './assets/files',
          esModule: false,
        },
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundles/[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/pages/index.html', to: '' },
        { from: 'src/pages/portfolio.html', to: '' },
        { from: 'src/pages/portfolioView.html', to: '' },
        { from: 'src/pages/services.html', to: '' },
        { from: 'src/pages/contact.html', to: '' },
        { from: 'src/components/contact/Contact.php', to: 'php' },
        { from: 'src/assets/sitefiles/favicon', to: 'assets/favicon' },
        { from: 'src/assets/pictures/srp-designs-ex.png', to: 'assets/images' },
        { from: 'src/assets/sitefiles/sitemap.xml', to: '' },
        { from: 'src/assets/sitefiles/google084c1b47f0e0c49d.html', to: '' },
        { from: 'src/styles/animate.min.css', to: 'styles' },
      ],
    })
  ]
};
