- 总结

  - 可以为函数设置默认值

    ```javascript
    function fn (height = 50, width = 100) {}
    ```

  - 模板字符串

    ```javascript
    var name = `my name is ${firstname} ${lastname}`
    ```

  - 结构赋值

    ```javascript
    //从数组中获取值
    var array = [1,2,3]
    var [first,second] = array
    console.log(first)   	//1
    console.log(second)		//2
    
    //交换变量的值
    var x = 1;
    var y = 2;
    [x,y] = [y,x]
    
    //获取对象中的值
    const student = {
      name:'小明',
      age:18
    }
    
    let {name,age} = student
    console.log(name)
    console.log(age)
    ```

  - 延展操作符

    - 函数调用

      ```javascript
      //将args中的属性展开作为fn的入参
      var args = [1,2,3]
      function fn (...args) {}
      ```

    - 数组中调用

      ```javascript
      [...'hello']//["h", "e", "l", "l", "o"]
      
      //数组拷贝
      var arr = [1,2,3]
      var _arr = ...arr;
      //合并两个数组
      var arr1 = [1,2,3]
      var arr2 = [4,5,6]
      var arrCombine = [...arr1,...arr2]
      ```

      

    - 在react中通过延展操作符合结构赋值，将想传的数据作为props

      ```javascript
      var params = {
      	name:'leijun',
      	title:'are you ok',
      	type:0
      }
      //将除了type外的属性赋值给other
      var {type,...other} = params;
      
      //将other作为props传入组件
      <component {...other} />
      ```

    

  - 数组includes()

    - 判断是否包含某个元素

      ```javascript
      let arr = ['react','angular','vue']
      var flg = arr.includes('flutter')
      ```

  - 指数操作符**

    - 与Math.pow()等效

      ```
      2**10 //1024
      ```

  - Object.values()

    ```javascript
    //遍历一个对象的所有value
    const obj = {a:1,b:2}
    
    //ES7
    const vals = Object.keys(obj).map((key)=>{
    	return obj[key]
    })
    
    //ES8
    const vals = Object.values(obj)
    ```

