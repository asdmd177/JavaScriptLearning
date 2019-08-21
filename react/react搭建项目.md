- 安装react和react-dom

  ```npm
  npm install react react-dom --save
  ```

- jsx语法解析包

  ```npm
  npm install babel-prest-react --save-dev
  ```

- 配置.babelrc

  ```javascript
  {
  	"prests":["env","stage-0","react"],
  	"plugins":["transform-runtime"]
  }
  ```

- 将loader的规则改为

  ```javascript
  //jsx?$也可以写成js|jsx$
  modules:{
  	"rules":[
  		{test:/\.jsx?$/,use:'babel-loader',exclude:/node_modules/}
  	]
  }
  ```

- 设置容器

  ```html
  <div id="app"></div>
  ```

- 导入react和react-dom

  ```javascript
  import React from 'react'
  import ReactDOM from 'react-dom'
  ```

  