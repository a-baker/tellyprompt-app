const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'dist/style.css', 
    allChunks: true
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPluginConfig.extract({
                    use: [{
                        loader: "css-loader?includePaths[]=" +
        (path.resolve(__dirname, "./node_modules"))
                    }, {
                        loader: "sass-loader?includePaths[]=" +
        (path.resolve(__dirname, "./node_modules"))
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader' }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig
    ],
    devServer: {
    proxy: { 
        '/**': {  //catch all requests
        target: '/index.html',  //default target
        secure: false,
        bypass: function(req, res, opt){
            //your custom code to check for any exceptions
            //console.log('bypass check', {req: req, res:res, opt: opt});
            if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/dist/') !== -1){
            return '/'
            }

            if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
            }
        }
        }
    }
    } 
}