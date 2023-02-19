const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.argv[process.argv.indexOf('--mode') + 1] || 'development';
const isDevMode = mode === 'development';

module.exports = {
  mode,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    historyApiFallback: true,
  },
  devtool: isDevMode ? 'source-map' : undefined,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: path.join(__dirname, 'src'),
      styles: path.join(__dirname, 'src/assets/styles'),
      student: path.join(__dirname, 'src/modules/student'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
