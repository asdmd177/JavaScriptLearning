- 总结

  - vue脚手架安装

    ```npm
    npm install -g @vue/cli
    ```

  - 创建项目

    ```npm
    vue create 项目名
    ```

  - 必选的安装功能 ：
  
    - babel
    - router(hash模式)
    - linter
    - eslint(standard)
  
  - 脚手架生成的项目项目结构
  
    - node_modules---------依赖包目录
  
    - public---------静态资源目录
  
    - src---------组件源代码
  
      - assets---------图片、样式
      - components---------公共组件
      - views---------视图组件
      - App.vue---------根组件
      - main.js---------webpack打包入口
  
    - babel.config.js---------babel配置文件
  
    - .eslintrc.js---------eslint语法配置文件
  
    - package.json---------包管理配置文件
  
      
  
  - vue项目相关配置
  
    - vue.config.js
  
      ```javascript
      module.exports = {
        "devServer":{
      		"port":"8081",
      		"open":"true"
      	}
      }
      ```
  
    
  
    