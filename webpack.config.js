const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/simple-calendar.js',
    mode: 'production',
    output: {
        filename: 'simple-calendar.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                   {
                       loader:MiniCssExtractPlugin.loader,
                   },
                   "css-loader"
               ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "simple-calendar.min.css",
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}