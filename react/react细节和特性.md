- 使用prop-types对外界传入的props进行校验

  ```javascript
  import PropTypes from 'prop-types'
  
  //使用，一定要在组件的静态属性propTypes使用，这是固定写法
  static propTypes = {
  	xxx:PropTypes.number
    yyy:PropTypes.string
  }
  ```

- 遍历组件的所有子节点(React.Children)

  ```javascript
  React.Children.map(this.props.children,(child)=>{
  
  })
  ```

  

- 事件绑定

  - 注意：react中不推荐使用传统的dom绑定事件的方法

    ```javascript
    //不推荐
    document.getElementbyId(id).onclick = function(){}
    ```

  - 行内方式

    ```javascript
    <div onClick={()=>{console.log('xxxx')}}></div>
    ```

- ref关键字

  - 注意：this.refs[refName]获取的是真实的DOM，因此需要等到元素被挂载到页面之后才能使用
  
  ```javascript
  <h1 ref="h1"></h1>
  
  //通过refs获取元素
  this.refs.h1
  ```



- react绑定this的方法的几种形式

  - 行内

    ```javascript
    //除了第一个参数代表了this，剩余的参数会成为clickHandler的入参
    <input onClick={this.clickHandler.bind(this,arg)}></input>
    ```

  - 在构造函数中定义

    ```javascript
    constructor(props){
    	super(props)
      //bind不会修改原函数的指向，但是会返回一个修改完指向的函数拷贝
    	this.clickHandler = this.clickHandler.bind(this,arg)
    }
    ```

  - 箭头函数

    ```javascript
    <input onClick={()=>{this.clickHandler(arg)}}></input>
    ```

    

- 表单通过onChange将数据同步到state

  - 如果input定义了value，但是没有onChange则报错

  ```javascript
  class xxx extends Component{
    render(){
      constructor(){
        this.state={
          msg:1
        }
      }
      //通过事件对象，当然通过ref也是可以的
      changeHandle(e){
        this.setState({
          msg:e.target.value
        })
      }
      return(
      	<input 
        	value={this.state.msg} 
    			onChange={this.changeHandle.bind(this)}>
        </input>
      )
    }
  }
  ```

- react 的context

  - 用于组件的属性共享给所有的后代组件（不需要一层层的传递）

    ```javascript
    //祖父组件定义一个方法,方法名固定
    getChildContext(){
      //返回要共享的数据
      return {
        数据名:1111
      }
    }
    //还需要使用属性校验，规定共享数据的数据类型
    static childContextTypes = {
      数据名:ReactTypes.number
    }
    ===================================
    
    //后代组件想要使用父组件共享的数据，则一定要先进行数据类型的校验
    static contextTypes = {
      数据名:ReactTypes.number
    }
    //使用
    <input>{this.context.数据名}</input>
    ```

    

- 路由

  - 下载依赖

  - ```npm
    npm install react-router-dom --save
    ```

  - 导入

    ```javascript         
    import {HashRouter,Route,Link} from 'react-router-dom'
    ```

  - HashRouter 路由根容器,项目中使用一次即可

    ```javascript
    //包裹项目的根组件,注意<HashRouter/>只能有一个子节点
    render(){
    	return (
    		<HashRouter>
    			根组件内容
    			...
    		</HashRouter>
    	)
    }
    ```

  - Route路由规则

    ```javascript
    import Home from 'xxx/Home.jsx'
    //path:匹配的路由，component要展示的组件
    <Route path="/home" component={Home}></Route>
    ```

  - Link占位符

    ```javascript
    //匹配的是模糊匹配
    <Link to="/home"></Link>
    
    //精确匹配需要使用关键字 exact
    <Link exact to="/home"></Link>
    ```

  - 通过路由传递参数

    ```javascript
    //将123作为id传给Home组件
    <Route path="/home/:id" component={Home}></Route>
    <Link exact to="/home/123"></Link>
    
    //Home组件获取路由传递的数据
    {this.props.match.params.id}
    ```

    