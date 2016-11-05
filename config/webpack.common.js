var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'main':       './src/main.browser.ts',
        'vendor':    ['./src/vendor.browser.ts','jquery'],
        'polyfills': './src/polyfills.browser.ts',
    },

    resolve: {
        root: [ path.resolve('./src')],
        modulesDirectories: ['js', "node_modules"],
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)\??.*$/,
                loader: 'file?name=assets/[name].[hash:8].[ext]'
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
            { test: /\.html$/, loader: 'html?attrs=img:src link:href' },
        ]
    },

    plugins: [
        //将样式统一发布到style.css中
        new ExtractTextPlugin("style.css", {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "windows.jQuery": "jquery",
            jQuery:"jquery"
        }),
    ],
};
