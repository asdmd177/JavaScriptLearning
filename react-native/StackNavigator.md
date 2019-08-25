- ####createStackNavigator(RouteConfigs,StackNavigatorConfig)
  - 参数

    - RouteConfigs(必填)：路由名和组件的映射

      ```javascript
      /**
       *screen 指定一个React组件作为屏幕的显示内容
       *navigationOptions:设置标题，右边按钮...
       *path:
       */
       //静态设置navigationOptions
     路由名:{
       	screen:组件名,
     	navigationOptions:{
       		title:'xxxx'
     	}
       }
     //动态设置navigationOptions
        路由名:{
     	screen:组件名,
       	navigationOptions:props=>{
        const params = props.state.params
          //一定要return
        return {
            title:params.titleName
        }
        }
     }
      ```

      

    - StackNavigatorConfig(选填)

      - 路由配置

        - initialRouteName：设置默认页面组件（必须是在RouteConfigs中注册的）

        - initialRouteParams：初始路由参数

        - initialRouteKey：设置标志位

          。。。

      - 样式

        - mode：页面切换模式
  
        - headerMode：导航栏显示模式
  
        - navigationOptions
  
        - title
  
        - header：可以通过设置null来隐藏导航条
  
          - headerTitle
  
            。。。
  
          。。。
  
  - 安装依赖

    ```npm
    npm install react-navigation --save
    npm install react-native-gesture-handler --save
    //将native 方法关联到项目中
    react-native link react-native-gesture-handler
    ```
  
  - 生成react-navigation容器
  
    ```javascript
    import {createAppContainer} from 'react-navigation'
    import {MyNavigation} from './xxxx/xxxx/xxx'
    //将生成的Navigation对象作为参数
    const MyNavigatorContainer = createAppContainer(MyNavigation)
    //将容器返回
    AppRegistry.registerComponent(appName,()=>MyNavigatorContainer)
    ```
  
    