- 概念

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

- 组件

  - 通过function构造函数创建组件

    ```javascript
    //组件名首字母必须大写，否则无法通过编译
    function 组件名(props){
    	return <div>props.xxx</div>
    }
    //注意：虽然代码中没有出现react，但是jsx代码的本质是react.createElement(),因此必须导入react
    ```

    

  - 通过class关键字创建组件

    ```javascript
    //继承了React.Component就是一个组件模板了
    class 类名 extends React.Component{
    	//必须要有构造函数
      constructor(props){
        //必须调用Component的构造函数
    		super(props)
    	}
      //必须要有render
      render(){
        //必须有return
        return()
      }
    }
    
    //使用
    <类名></类名>
    ```

  - 通过属性给组件传递数据

    ```javascript
    //传number类型的数据必须要用{}，否则无法通过编译
    <类名 a属性="字符串" b属性={20}></类名>
    //也可以通过...展开一个对象，将对象作为数据传给组件
    <类名 {...object}></类名>
    
    //组件内部，通过this.props.属性名 调用传入的数据
    //注意：this.props是一个只读的对象
    ```

  - this.state

    - 当前组件实例的私有数据对象，好比是vue组件的 ***data(){return{}}***

    ```javascript
    constructor(props){
    	super(props)
    	this.state = {
    		数据1:值1
    		数据2:值2
        ...
    	}
    }
    
    //使用state，在jsx语法中通过this.state.属性名 调用
    ```

  - react中提供的事件绑定机制和html中的写法类似，只不过命名是小驼峰

    ```
    onClick
    onMouseMove
    ```

  - 组件方法中的this指向

    ```javascript
    class 类名 extends Component{
    	fn(){
        //这里的this会是undefined
    		console.log(this)
    	}
    }
    
    //如果想让this指向组件实例可以有两种方法
    //一.修改fn的写法为箭头函数
    fn=()=>{}
    //二.在绑定事件时，通过bind指定this
    onClick={this.fn.bind(this)}
    ```

  - 修改state的属性的值，需要使用this.setState()，否则页面不发生变化

    - this.setState()只会重新覆盖显式定义的属性

    - this.setState()可以传入对象、方法

      ```javascript
      //两种方法效果相同
      this.setState({
      	xxx:123
      })
      //prev代表旧的state
      this.setState(function(prev,props){
      	return {
      		xxx:123
      	}
      },()=>{
        //更新数据后的回调方法，可获取最新的state
        console.log(this.state)
      })
      ```

    - this.setState()内部是异步执行的，在setState()后面的语句中获取state内容，不一定是更新后的数据

      

- 组件的分类

  - 通过function创建的组件没有state，是为无状态组件（无私有数据）
  - 通过class创建的组件有state，是为有状态组件，且有生命周期函数