//引入成员 import + 接受名 +from + js路径（默认引入）
import util from './module-util.js';

var result = util.sum(2,3);
//调用 -- 5
console.log(result);

//按需引入,as 关键字起别名
import {students,getAddress,getLocation as location} from './module-tools.js';

console.log(students);
console.log(getAddress());
//别名了别名的函数
console.log(location());



//直接导入代码块,并执行
import './module-code-block.js'