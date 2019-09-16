module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    /* module: {
        rules: [
            { test: /\.node$/, use: 'raw-loader'}
        ]
    } */
    externals: {
        diskusage: 'diskusage'
    }
};