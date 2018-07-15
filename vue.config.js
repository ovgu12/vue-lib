// vue.config.js
const path = require('path');
const webpack = require('webpack');
const isTestMode = process.env.NODE_ENV === 'test';
const config = {
    configureWebpack: {
        plugins: [
            // Provide jquery in global
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            // Limit number of chunks
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
        ]
    }
}

module.exports = config;