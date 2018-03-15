const path = require('path');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'production',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new GasPlugin()
    ]
};
