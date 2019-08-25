- ####5大常用导航器

  - createStackNavigator：屏幕上方导航栏
  - createBottomTabNavigator：屏幕下方导航栏
  - createMaterialTopTabNavigator
  - createDrawerNavigator：抽屉效果，侧边导航栏
  - createSwitchNavigator



- ###navigation对象
  - 当导航器中的screen组件打开时，通过***this.props.navigation***获取到navigation对象

  - 方法与属性

    - navigate：跳转

    - state：返回当前的路由对象{routeName:'',key:'',params:{}}

    - setParams：设置传给跳转页面的参数

      ```javascript
      const {setParams} = this.props.navigation
      //使用
      onPress = {()=>setParams({name:'狗蛋'})}
      ```

    - goBack(key)：返回上一页面,或者key对应的页面

    - dispatch：向路由发送一个action

      - action通过NavigationActions产生

        ```javascript
        const navigateAction = NavigationActions.navigate({
          //跳转页面的路由配置名
          routeName: 'Profile',
          params: {}
        });
        //进行页面的跳转
        this.props.navigation.dispatch(navigateAction);
        ```

  - 三大属性

    - ref: 通过ref属性获得navigation
    - onNavigationStateChange(prevState,newState,action)
    - screenProps: 向子屏幕传递数据 

  - stack navigator的特有的方法

    - push：导航到堆栈中的新的路由,push会多次创建页面，navigate不会
    - pop：返回上一个页面
    - popToTop：跳转到栈顶，并关闭其他的所有路由
    - reset
    - replace





- ###Actions

  - ####NavigationActions的方法

    - navigate：页面跳转

    - setParams

      ```javascript
      /**
       *Navigation的的setParams是改变本身的数据
       *NavigationActions能改变任意指定screen组件navigation的数据
       */
      NavigationActions.setParams({
      	params:{数据1:xxx},
        key:'id-xxxxxxx'
      })
      ```

      

  - #### StackActions的方法

    - reset
    - replace
    - push：push会多次创建页面，navigate不会
    - pop
    - popToTop