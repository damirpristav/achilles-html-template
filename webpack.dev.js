const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  entry: { 
    bundle: './src/index.js' 
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  resolve: {
    extensions: ['.html','.js']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer, cssnano]
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {   
              resources: ['./src/scss/abstracts/variables.scss', './src/scss/abstracts/mixins.scss', './src/scss/base/*.scss']
            },
          }
        ]
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.html?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin([
      { from: './src/assets/', to: 'assets/' },
    ]),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      files: ['./*html'],
      server: { baseDir: ['./'] }
    })
  ]
}