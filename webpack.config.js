const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dest'),
		publicPath: "/",
	},
	module: {
    rules: [
      // { test: /\.txt$/, use: 'raw-loader' }
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
	// https://github.com/webpack/docs/wiki/webpack-dev-server
	devServer: {
		overlay: true,
		hot: true
  }
}

module.exports = config