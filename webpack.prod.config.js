const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: "./src/index.js",
    portfolio: "./src/portfolio.js",
    portfolio_view: "./src/portfolioView.js",
    placeholder: "./src/placeholder.js",
    contact: "./src/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundles/[name].bundle.js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {},
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      automaticNameDelimiter: '.',
      chunks: 'all'
    },
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/pages/index.html', to: '' },
        { from: 'src/pages/portfolio.html', to: '' },
        { from: 'src/pages/portfolioView.html', to: '' },
        { from: 'src/pages/placeholder.html', to: '' },
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
