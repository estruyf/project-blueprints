const webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "#source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new ExtractTextPlugin('../css/style.css')
    ]
}

const prod = process.argv.indexOf('-p') !== -1;
if (prod) {
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': `"production"`
        }
    }));
} else {
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': `"development"`
        }
    }));
}

module.exports = config;