const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new extractTextPlugin({
	filename: 'main.css'
});

module.exports = {
	context: path.resolve(__dirname, 'src'),  
	entry: './app.js',
	output: {
		filename: 'bundle.js',
	    // Output path using nodeJs path module
		path: path.resolve(__dirname, 'dist')
	},
	module : {
		rules: [
		    {
		      test: /\.js$/,
		      include: /src/,
		      exclude: /node_modules/,
		      use: {
		        loader: "babel-loader",
		        options: {
		          presets: ['es2015']
		        } 
		      }
		    },
		    {
		      test: /\.scss$/,
		      include: /src/,
		      exclude: /node_modules/
		      
		      
		    }
	  	]
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./dist/assets/media"),
		compress: true,
		port: 12000,
		stats: 'errors-only',
		open: true
	},
	devtool: 'inline-source-map',
	plugins: [
  		new CleanWebpackPlugin(['dist']),
  		new HtmlWebpackPlugin({
      		template: 'index.html'
    	})
	]
}