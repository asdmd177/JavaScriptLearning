- 总结

  - 虚拟DOM

    - DOM由浏览器的js提供

    - 虚拟DOM，由开发人员模拟实现，扩展性更强

    - 通过***更新前***的虚拟DOM树和***更新后***的虚拟DOM树的对比实现页面***按需更新***

      - 虚拟DOM树，用JS对象模拟DOM树

        

  - Diff算法

    - tree diff --- 新旧虚拟DOM从父节点到子节点逐层对比

    - component diff --- 在对比每一层的时候，组件之间的对比。组件类型不同直接用旧组件替换成新组件。

    - element diff --- 对比组件中的元素，如果组件类型相同，但是其中元素不同，也需要更新

    - key属性：可以把页面上的DOM节点和虚拟的DOM树做一层关系

      

  - 新建react项目

    - 需要安装

      - react 创建React组件、组件生命周期

      - react-dom DOM操作相关的包

        ```npm
        npm install react react-dom --save
        ```

      - 导入react和react-dom

        ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'
        ```

      - 通过react创建DOM元素

        ```javascript
        /**
         * createElement的参数
         * 参数1：元素类型
         * 参数2：元素的属性
         * 参数3之后的数据：元素的子节点
         */
        var $h1 = React.createElement('h1',null,'这是h1')
        //将文本节点和h1节点作为$div的子节点
        var $div = React.createElement('div',{
          title:'this is a div',
          id:'$div'
        },'这是div',$h1)
        ```

      - 通过react-dom将创建的DOM元素渲染到页面上

        ```javascript
        /**
         * 参数1:要渲染的DOM元素
         * 参数2:元素要渲染到的位置{DOM}
         */
        ReactDOM.render($div,document.getElementById('app'));
        ```

        

  - JSX(符合xml规范的js语法)

    - ***注意*** ：本质还是使用了React.createElement(),框架隐式调用

    - 需要先安装 ***babel-preset-react***

      ```npm
      npm install babel-preset-react --save-dev
      ```

      ```javascript
      {
        "presets":["env","stage-0","react"],
        "plugins":["transform-runtime"]
      }
      ```

      

    - 通过JSX创建DOM元素

      ```javascript
      var $div = <div>这是jsx创建的div</div>
      ReactDOM.render($div,document.getElementById('app'));
      ```

      