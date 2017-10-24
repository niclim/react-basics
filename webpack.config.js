const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: ["babel-polyfill", "./app/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}

if (process.env.NODE_ENV === "production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) // Sets React to production mode
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;