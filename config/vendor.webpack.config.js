const webpack = require('webpack')

const config = {
    entry: {
        'vendor': ['./vendor']
    },
    output: {
        path: './build',
        filename: './vendor.bundle.js',
        library: 'vendor_lib'
    },
    plugins: [new webpack.DllPlugin({
        name: 'vendor_lib',
        path: 'build/vendor-manifest.json',
    })]
}

module.exports = config;