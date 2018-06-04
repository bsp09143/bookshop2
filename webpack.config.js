var webpack = require('webpack');
var path = require('path');
var BASE_DIR = path.resolve(__dirname, '');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var NPM_DIR = path.resolve(__dirname, 'node_modules');

var config = {
    entry: ['babel-polyfill',BASE_DIR + '/main.jsx'],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: NPM_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: BASE_DIR,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;