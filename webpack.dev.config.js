const config = require('./webpack.base.config.js'),
    path = require('path');

config.entry.index = './demo/index.js';

config.output = {
    path: path.resolve(__dirname, 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
};

/*
    Allows debugging
    Reference: https://webpack.js.org/configuration/devtool/#devtool
*/
config.devtool = 'eval-source-map';

/*
    Allow the build to process sass/css files
*/
config.module.rules.push({
    test: /\.s?css$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
    ]
});

/*
    Pass configuration values to webpack-dev-server
*/
config.devServer = {
    contentBase: [
        path.join(__dirname, 'demo')
    ]
};

module.exports = config;
