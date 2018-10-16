
function json2str(json){
	return JSON.stringify(json);
}

var print = str=>{
	if(typeof str === "string")
		console.log(str);
	else
		console.error("传入参数不是字符串");
}


var writer = content=>{
	document.write(content);
}

module.exports = {
	json2str:json2str,
	print:print,
	writer:writer
}