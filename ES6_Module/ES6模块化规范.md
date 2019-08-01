### 总结

- Node.js中不支持ES6中的模块化(高级特性)

- 需要使用babel进行语句转换

  - 第一步 安装babel

    ```npm
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    ```

    

  - 第二步 安装polyfill

    ```npm
    npm install --save @babel/polyfill
    ```

    

  - 第三步 项目根目录创建babel.config.js

    ```javascript
    //targets -- babel转换之后的js代码必须支持以下版本的浏览器
    const presets = [
    	["@babel/env",{
    		targets:{
    			edge:"17",
    			firefox:"60",
    			chrome:"67",
    			safari:"11.1"
    		}
    	}]
    ];
    module.exports = {presets}
    ```

  - 通过npx执行代码

    ```npm
    npx babel-node 目标.js
    ```

- ES6中的模块化也是将一个js文件看成一个module

- 使用 ***export default {}*** 导出成员

  - 注意！每个模块中只能使用一次 ***export default{}***

- 使用***import from*** 引入模块

  ```javascript
  //引入成员 import + 接收名 +from + js路径
  import util from './module-util.js';
  ```

- 如果一个js中没有使用export default，但在其他文件中引入了该js，则import返回一个 ***{}***

- 按需导出语法

  - ***export let 变量名***

  - ***export function 函数名 = function(){}***

    ```javascript
    export let x = 1
    export let y = 2
    //写法1
    export let sayHi = function(){console.log('hello')}
    //写法2
    export function sayHi(){console.log('hello')}
    ```

  - 按需导出的语句可以有***多条***

- 按需引入语法

  - import + {变量1, 变量2 as 自定义接收名} + from + js路径

    ```javascript
    export let x = 1;
    //给引入变量起别名
    import {x as $x} from 'module-util.js'
    ```

- 同时按需引入和默认引入的语法

  ```javascript
  import util,{x} from './module-util.js';
  ```

- 直接执行模块中的代码块，不接收模块中暴露的变量和函数

  - import + js路径

  ```javascript
  import './module-code-block.js'
  ```

  

