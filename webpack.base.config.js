const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: ['node_modules'],
                use: [
                    { loader: 'ng-annotate-loader' },

                    /* babel options specified in .babelrc */
                    { loader: 'babel-loader' }
                ]
            }, {
                test: /\.html$/,
                exclude: ['node_modules'],
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        // Refer to the node_modules folder to resolve modules.
        modules: ['node_modules'],
        extensions: [
            '.js',
            '.css'
        ]
    }
};
