- 总结

  - 在父组件中调用子组件时，子组件标签中的内容会传递给子组件中的***<slot></slot>***标签

  - ***<slot></slot>***标签位于子组件的***<template></template>***标签中

    ```javascript
    Vue.component("xxx",{
    	"template":`
    		<slot></slot>
    	`
    });
    ```

  - <slot></slot>标签中的内容是默认内容，子组件使用时标签里没有内容，则会显示<slot></slot>中的默认内容。

    

  - 具名插槽

    - 可以给<slot></slot>标签定义名字

      ```javascript
      <slot name="header"></slot>
      ```

    - 子组件在使用时，标签中间的内容可以定义一个***slot***属性，将内容传递给对应名称的<slot></slot>标签。

      ```javascript
      //这个标签就会传递到<slot name="header"></slot>中
      <h1 slot="header">标题内容</h1>
      ```

    - 没有通过slot属性指定名称的内容则会传递给***未具名插槽***

    - 当有多行内容,多个标签需要传递给<slot><slot/>时，可以使用<template></template>

      ```javascript
      <template slot="header">
      	<h1>标题内容</h1>
      	<h2>副标题内容</h2>
      </template>
      ```

      

  - 作用域插槽

    - 子组件通过v-bind在slot标签上绑定数据，将数据传给父组件

    - 父组件通过<template></template>的slot-scope属性获得子组件传递的数据

      ```javascript
      //子组件传递info
      <slot v-bind="info"></slot>
      
      //父组件获取info数据
      <template slot-scope="slotProps">
        {{slotProps.info}}
      </template>
      ```

      