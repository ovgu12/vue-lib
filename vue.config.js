// vue.config.js
const path = require('path');
const webpack = require('webpack');
module.exports = {
    configureWebpack: {
        entry: {
            "basic.css": path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/assets/css/basic.css'),
            "chart.css": path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/assets/css/chart.css'),
        },
        module: {
            rules: [
                {
                    test: /\.(cur)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                },
            ]
        },
        resolve: {
            alias: {
                'basic.css': path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/assets/css/basic.css'),
                'chart.css': path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/assets/css/chart.css'),
                html2canvas: path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/vendor/thirdparty/html2canvas'),
                componentUI: path.join(__dirname, 'node_modules/@platform.shared.libs.typescript/chartiq/dist/vendor/componentUI'),
            },
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}