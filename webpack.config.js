var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './populatedom.js',
    output: {
        path: __dirname,
        filename: "populatedom.min.js",

        library: 'populatedom',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            exclude: /(node_modules|bower_components)/,
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
};
