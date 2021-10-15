const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require('webpack-merge')

const common = merge([
{
      mode: 'development',
      entry: { 'js': './src/ts/script.ts', "css": './src/app.js' },

      

      module: {
         rules: [{
            test: /\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ],

         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         ],

      },
      resolve: {
         extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
         filename: '[name]/script.js',
      },

      plugins: [
         new miniCss({
            filename: '[name]/style.css',
         }),
         new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), 
            filename: 'index.html', 
         }),
         new CopyPlugin({
            patterns: [
               {
                  from: path.resolve(__dirname, 'src/img'),
                  to: path.resolve(__dirname, 'dist/img'),
               },
               {
                  from: path.resolve(__dirname, 'src/webfonts'),
                  to: path.resolve(__dirname, 'dist/webfonts'),
               },    
            ],
         }),
      ],
   },
]);

module.exports = function () {
   return common;
}