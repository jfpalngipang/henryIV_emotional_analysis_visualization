var path = require('path');
var webpack = require('webpack');

var OUT_DIR = path.resolve(__dirname, './assets/js');

module.exports = {
    entry: './src/web/index.js',
    output: {
        path: OUT_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};