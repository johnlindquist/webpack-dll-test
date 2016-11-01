const webpack = require('webpack')

const config = {
    entry: {
        'vendor': ['babel-runtime/regenerator/index']
    },
    output: {
        path: './build',
        filename: './vendor.bundle.js'
    },
    plugins: [new webpack.DllPlugin({
        name: 'vendor_lib',
        path: 'build/vendor-manifest.json',
    })]
}

module.exports = config;