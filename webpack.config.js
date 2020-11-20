const { resolve } = require('path');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: resolve('./dist'),
        filename: 'library.min.js'
    }
};