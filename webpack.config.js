(() => {
    'use strict';

    const webpack = require('webpack');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const path = require('path');

    const resolveDir = subpath => path.resolve(__dirname, subpath);

    const config = {
        mode: 'development',

        watch: true,
        watchOptions: {
            ignored: /node_modules/,
        },

        entry: ['./client/src/index.tsx'],

        devtool: 'source-map',

        output: {
            filename: 'app.min.js',
            publicPath: '',
            path: resolveDir('client/www'),
        },

        devServer: {
            port: 4345,
            historyApiFallback: true,
            inline: true,
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: [
                resolveDir('node_modules'),
                resolveDir('client/src'),
            ],
            alias: {
                '~': resolveDir('client/src'),
            },
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                    // include: path.resolve(__dirname, 'client/src'),
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    // include: path.resolve(__dirname, 'client/src'),
                },
            ],
        },

    };

    module.exports = config;

})();
