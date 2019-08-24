- 组件创建阶段
  - static defaultProps = {}
    - 初始化默认的props值，防止某些必要的数据用户没有传递
  - this.state = {}
    - 初始化组件的私有数据，在构造器中执行
  - componentWillMount()
    - 组件将要被挂载到页面上
    - 注意：这时组件没有被挂载到页面上，且虚拟DOM也没有被创建
  - render()
    - 创建出组件的虚拟DOM，render执行完，虚拟DOM就在内存中创建完毕
    - 函数中不能调用this.setState(), 因为会造成死循环导致栈溢出
  - componentDIdMount()
    - 组件完成了挂载
    - 在这个函数中，可以使用document.getElementbyId等获取DOM元素
    - 执行完，组件进入运行阶段
    - 是一个订阅的常用位置





- 组件运行阶段
  - componentWillReceiveProps(nextProps)
    - 子组件第一次被渲染到页面上时不会触发 
    - 外界接收的数据发生变化时调用
    - 在函数内使用this.props获取的是改变前的旧属性，要通过nextProps获取最新的属性
  - shouldComponentUpdate(nextProps,nextState)
    - state和props变化是被触发
    - 判断组件是否需要被更新
    - 函数必须返回true或false，当返回false组件不会随着state的改变而更新
    - 注意：当前函数中如果用this.state获取的数据是***旧数据***，获取最新的state数据要通过nextState参数
  - componentWillUpdate(nextProps,nextState)
    - 组件将要被更新，还没与更新
  - render()
    - 将虚拟DOM更新到最新
  - componentDIdUpdate(prevProps,prevState,snapshot)
    - 组件更新完毕，渲染完成
    - snapshot是getSnapshotBeforeUpdate钩子函数的返回值





- 销毁阶段
  - componentWillUnmount()
    - 组件将被销毁，组件中的方法尚可被调用





- 不安全方法：尽量少用，以后可能移除

  - componentWillMount

  - componentWillReceiveProps   

    - 可以用 static getDerivedStateFromProps替换

  - ComponentWillUpdate

    