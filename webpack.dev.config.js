const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/frontend/index.tsx'],
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['react-refresh/babel'],
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/assets/images',
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(pdf|md)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/assets/files',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // Limit at 50k. Above that it emits separate files
                        limit: 50000,
                        // url-loader sets mimetype if it's passed.
                        // Without this it derives it from the file extension
                        mimetype: 'application/font-woff',
                        // Output below fonts directory
                        name: './fonts/[name].[ext]',
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'css', '.scss'],
    },
    plugins: [
        new ESLintPlugin({
            context: 'src/frontend',
            extensions: ['tsx', 'js', 'jsx'],
        }),
        new HtmlWebPackPlugin({
            template: './src/frontend/html/index.html',
            filename: './public/index.html',
            excludeChunks: ['server'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
