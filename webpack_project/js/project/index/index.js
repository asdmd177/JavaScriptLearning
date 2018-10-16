var common = require("../../plugins/common");
var devkit = require("../../plugins/devkit");

function init(){
	initPage();
	//initEvent();
}

function initPage(){

	devkit.initTable();
}

function initEvent(){

	common.print("===初始化dom元素绑定===");
}

init();