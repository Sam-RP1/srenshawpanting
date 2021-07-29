const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        index: './src/frontend/index.js',
    },
    output: {
        path: path.join(__dirname, 'build/public/'),
        filename: 'bundles/[name]-bundle.js',
        chunkFilename: 'bundles/[name].bundle.js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '-',
        },
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
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
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/images',
                        },
                    },
                ],
            },
            {
                test: /\.(pdf|md)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './assets/files',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/index.html',
            filename: './index.html',
            excludeChunks: ['server'],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
        }),
        new CssMinimizerPlugin(),
    ],
};
