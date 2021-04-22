const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require ('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
    },
    output :{
        path: path.resolve(__dirname, 'dist'),
        filename : './js/bundle.js'
    },

    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                { from: './src/icon', to: './icon'},
                { from: './src/css', to : './css'},
                {from: './src/fonts', to : './fonts'}
            ]
        }),

    ],
}
