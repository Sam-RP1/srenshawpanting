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
                loader: 'babel-loader',
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
            template: './src/frontend/pages/index.html',
            filename: './public/index.html',
            excludeChunks: ['server'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
