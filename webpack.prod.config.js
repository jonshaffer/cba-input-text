const config = require('./webpack.base.config.js'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

/*
    Clean output folder, and copy styles after build.
*/
config.plugins.push(
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {
                from: 'src/index.scss',
                to: ''
            }
        ])
);

/*
    Externals: add module names here that you want to be
    excluded from the output package.
*/
config.externals = [
    'angular',
    'hpc-form',
    'hpc-logger',
    'hpc-utilities'
];

module.exports = config;
