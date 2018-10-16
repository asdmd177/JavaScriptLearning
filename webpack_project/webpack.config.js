var path = require("path");

module.exports = {
  entry:  __dirname + "/js/project/index/index.js",	//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/js/public",					//打包后的文件存放的地方
    filename: "index.js"							//打包后输出文件的文件名
  }
}