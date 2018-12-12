
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/
          },
          { 
            test: /\.less$/,
            use: [ 
                'style-loader',
                'css-loader', 
                'less-loader'
            ],
          }
          
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          title: 'Cool Photo Gallery',
          files: {
            css: ['style.css'],
            js: ['bundle.js']
          }
        })
      ],
      devServer: {
        open:true,
        compress:true,
        port: 8080,
        contentBase: './dist',
      }
}

module.exports = config;