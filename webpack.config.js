const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pug = {
    test: /\.pug$/i,
    use: [
        {
            loader: 'html-loader',
            options: {
                sources: false,
            }
        },
        'pug-html-loader'
    ]
};

const sass = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: "sass-loader",
            // options: {
            //   sassOptions: {
            //     indentWidth: 4,
            //     includePaths: ["./src/layout/coors/color",],
            //   },
            // },
        },
    ]
};


const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [pug, sass]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};
module.exports = config;