//这里的util就是“module-util.js”文件的export对象
var util = require('./module-util.js');

//打印export对象,sum为暴露的方法 -- { sum: [Function: sum] }
console.log(util);

//调用暴露的方法试试 -- 3
console.log(util.sum(1,2));

//这次使用module.exports = xx 的方式导出
var tools = require('./module-tools');
tools.print(1024);

//exports 和 module.exports的区别
var config = require('./module-config');
//{ INSTALL_ORDER_LIST: 'localhost:8081/xxxxx/installOrder/list' }
console.log(config);