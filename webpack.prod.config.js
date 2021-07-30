const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/frontend/index.tsx',
    },
    output: {
        path: path.join(__dirname, 'build/public/'),
        filename: 'bundles/[name]-bundle.js',
        chunkFilename: 'bundles/[name].bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'css', '.scss'],
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
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/files',
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
                        name: './assets/fonts/[name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/pages/index.html',
            filename: './index.html',
            excludeChunks: ['server'],
            publicPath: './',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
        }),
        new CssMinimizerPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/frontend/assets/favicon', to: './assets/favicon' },
                { from: './src/server/server-prod.js', to: '../server.js' },
                { from: './src/server/routes', to: '../routes' },
                { from: './src/server/appdata', to: '../appdata' },
                { from: './src/server/package.json', to: '../package.json' },
            ],
        }),
    ],
};
