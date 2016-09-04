module.exports = {

    entry: './src/main.js',

    output: {
        path    : './build',
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test  : /\.vue$/, // regex to match all files ending by ".vue"
                loader: 'vue'
            },
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            }
        ]
    }
}
