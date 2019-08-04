const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	"template":"./src/index.html",
	"filename":"index.html"
});

module.exports = {
	"mode":"development",
	"entry":path.join(__dirname,"src/js/index.js"),
	"output":{
		"path":path.join(__dirname,"dist"),
		"filename":"bundle.js"
	},
	"module":{
		"rules":[{
			"test":/\.css$/,
			"use":['style-loader','css-loader']
		},{
			"test":/\.less$/,
			"use":["style-loader","css-loader","less-loader"]
		},{
			"test":/\.jpg|png|gif|svg|woff|ttf|eot$/,
			"use":["url-loader"]
		}]
	},
	//webpack打包期间会用到的文件列表
	"plugins":[htmlWebpackPlugin]

}