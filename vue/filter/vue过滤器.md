- 总结

  - 全局声明

    ```javascript
    //使用vue的api注册
    Vue.filter(过滤器名,function(val){
      return 经过处理的数据
    });
    ```

    

  - 局部声明

    ```javascript
    new Vue({
    	"filters":{
    		过滤器名:function(val){
          return 经过处理的数据
        }
    	}
    });
    ```

    

  - 使用过滤器

    ```javascript
    //方法一：通过差值表达式
    {{数据|过滤器名}}
    
    //方法二：通过绑定属性
    <div v-bind="属性名|过滤器名"></div>
    ```

    

  - 过滤器支持级联

    ```javascript
    {{数据|过滤器名1|过滤器名2|过滤器名3}}
    ```

    

  - 带参数的过滤器 

    ```javascript
    //val是要处理的数据，参数1、2分别对应arg1、arg2
    Vue.filter("myFilter",function(val,arg1,arg2){});
    
    {{data | myFilter(参数1,参数2)}}
    ```

    

  - 注意，过滤器的函数一定要有返回值