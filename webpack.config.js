module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
        {
        	test: /\.json$/,
        	loader: "json"
      	},
      	{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, 
        {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}
