const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
    portfolio: "./src/portfolio.js",
    portfolio_view: "./src/portfolioView.js",
    services: "./src/services.js",
    contact: "./src/contact.js",
  },
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'bundles/[name]-bundle.js'
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
      automaticNameDelimiter: '-',
      chunks: 'all'
    },
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-transform-runtime"]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.(pdf|md)$/i,
        loader: 'file-loader',
        options: {
          outputPath: './assets/files'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/frontend/pages/index.html',
      filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/frontend/pages/portfolio.html',
      filename: 'portfolio.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/frontend/pages/portfolioView.html',
      filename: 'portfolioView.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/frontend/pages/services.html',
      filename: 'services.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/frontend/pages/contact.html',
      filename: 'contact.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/frontend/assets/sitefiles/favicon', to: 'assets/favicon' },
        { from: 'src/frontend/assets/sitefiles/sitemap.xml', to: '' },
        { from: 'src/frontend/styles/animate.min.css', to: 'styles' }
      ],
    })
  ]
}
