var path = require('path');
module.exports = {
    entry: "./es2015/index.js",
    output: {
        path: __dirname,
        filename: "./es2015/index-webpack.js"
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'es6'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}