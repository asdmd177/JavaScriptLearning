### 总结

- 安装

  - 第一步，npm 初始化

  ```npm
  npm init   //生成package.json
  ```

  - 第二步，安装webpack 以及 webpack-cli

  ```npm
  npm install webpack webpack-cli --save-dev
  //打开package.json,如果在devDependencies节点下看到了webpack和webpack-cli，则安装成功
  ```

- webpack配置

  - 在package.json的scripts的节点中新增dev指令

    ```javascript
    scripts:{
    	"dev":"webpack"
    }
    ```

    

  - 新建一个webpack.config.js

  - 配置打包文件入口和输出文件的出口

    - 默认的入口是src/index.js
    - 默认的出口是dist/main.js

    ```javascript
    //需要引入node.js中的路径模块
    const path = require('path')
    module.exports = {
      //模式，development或production(production会进行代码的压缩)
      mode:'development',
      //__dirname 当前文件所处的目录
      entry:path.join(__dirname,'./src/index.js'),
      output:{
        //输出文件存放路径
        path:path.join(__dirname,'./dist'),
        //输出文件名
        filename:'bundle.js'
      }
    }
    ```

  - 配置webpack的自动打包（webpack-dev-server)

    - 第一步，安装webpack-dev-server

      ```npm
      npm install webpack-dev-server --save-dev
      ```

    - 第二步，更改package.json的指令

      ```javascript
      scripts:{
      	"dev":"webpack-dev-server"
      }
      ```

    - 注意，webpack-dev-server会在 ***内存*** 中生成一份bundle.js，访问路径为***根目录+bundle.js***，html引用 ***'/bundle.js'***即可。

    - 默认通过localhost:8080/访问页面

      - 更改IP，端口，自动打开浏览器

        ```javascript
        //--open 打包完成自动打开浏览器访问
        //--host 配置服务器的IP
        //--port 配置服务器的端口号
        scripts:{
        	"dev":"webpack-dev-server --open --host 127.0.0.1 --port 8081"
        }
        ```

        