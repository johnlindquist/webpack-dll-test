const webpack = require('webpack')
const config = {
    entry: {
        'app': ['./app']
    },
    output: {
        path: '/build',
        filename: './app.bundle.js'
    },
    plugins: [new webpack.DllReferencePlugin({
        context: '.',
        manifest: require('./../build/vendor-manifest.json'),
    })],
    module: {
        loaders: [
            {test: /\.(js)$/, loader: 'babel-loader', query:{
                "presets": [
                    "es2015"
                ],
                "plugins": [
                    "transform-async-to-generator"
                ]
            }}
        ]
    }
}

module.exports = config;