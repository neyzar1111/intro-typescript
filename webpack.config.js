const path = require('path');

module.exports = {
    entry: './src/script.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'public'),
    },
};