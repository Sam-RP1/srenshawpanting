const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/frontend/index.js'],
        portfolio: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/frontend/portfolio.js'],
        portfolio_view: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/frontend/portfolioView.js',
        ],
        contact: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/frontend/contact.js'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: './public/bundles/[name]-bundle.js',
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false,
                },
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['@babel/plugin-transform-runtime'],
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './public/assets/images',
                },
            },
            {
                test: /\.(pdf|md)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './public/assets/files',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/index.html',
            filename: './public/index.html',
            excludeChunks: ['server', 'portfolio', 'portfolio_view', 'contact'],
        }),
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/portfolio.html',
            filename: './public/portfolio.html',
            excludeChunks: ['server', 'index', 'portfolio_view', 'contact'],
        }),
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/portfolioView.html',
            filename: './public/portfolioView.html',
            excludeChunks: ['server', 'portfolio', 'index', 'contact'],
        }),
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/contact.html',
            filename: './public/contact.html',
            excludeChunks: ['server', 'portfolio', 'portfolio_view', 'index'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/frontend/assets/sitefiles/favicon', to: 'public/assets/favicon' },
                { from: 'src/frontend/styles/animate.min.css', to: 'public/styles' },
            ],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
