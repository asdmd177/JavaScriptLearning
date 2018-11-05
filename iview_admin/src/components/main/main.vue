<style scoped>
   @import './css/main.css';
</style>

<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <!-- 侧边栏 -->
            <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed">
                <sider-menu @on-select='turnToPage'></sider-menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <sider-trigger icon="md-menu" v-on:collapse = "chngSiderBar"></sider-trigger>
                    <!-- 面包屑 -->
                    <Breadcrumb :style="{float: 'left'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>

                    <!-- 头像 -->
                    <avatar></avatar>
                </Header>
                <!-- 导航栏 -->
                <tags-nav :list="tagsList" :value="$route" @on-close="handleCloseTag"></tags-nav>

                <Content :style="{padding: '0 16px 16px'}">
                    <!-- router-view -->
                    <router-view></router-view>

                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    //侧边栏伸缩按钮
    import siderTrigger from './components/sider-trigger/sider-trigger.vue'
    //用户头像组件
    import avatar from './components/avatar/avatar.vue'
    //侧边菜单栏
    import siderMenu from './components/sider-menu/sider-menu.vue'
    //导航栏
    import tagsNav from './components/tags-nav/tags-nav.vue'

    //引入工具方法
    import {forEach} from '@/libs/tools'

    export default {
        //上方import的组件需要在此处进行注册
        components: {
            siderTrigger,
            avatar,
            siderMenu,
            tagsNav
        },
        data () {
            return {
                collapsed : false,
                tagsList : []
            };
        },
        methods:{
            chngSiderBar(flag){
                this.collapsed = flag;
            },
            /*
                @function 根据传来的路由地址进行跳转
                @param {string} name 路由
            */
            turnToPage(name){
                this.$router.push({
                    path:name
                });
            },
            /*
                @function 关闭页签，跳转到上一个组件 
            */
            handleCloseTag(type, currentTags){
                var _tagsList = this.tagsList;
                //全部关闭
                if(type === 'all'){
                    var temp = [];
                    temp.push(_tagsList[0]);
                    this.tagsList = temp;
                    this.$router.push({path:this.tagsList[0].path});
                //关闭除了首页和当前页的其他页面
                }else if(type === 'others'){
                    var temp = [];
                    temp.push(_tagsList[0]);
                    forEach(_tagsList,(item,index)=>{
                        if(item.name === currentTags.name 
                            && currentTags.name !== _tagsList[0].name){
                            temp.push(_tagsList[index]);
                        }
                    });
                    this.tagsList = temp;
                }else{
                    forEach(_tagsList,(item,index)=>{
                        if(item.name === currentTags.name){
                            if(_tagsList.length>1){
                                //最后一个标签
                                if(index === _tagsList.length-1){
                                    this.$router.push({path:_tagsList[index-1].path});
                                //不是最后一个标签
                                }else{
                                    this.$router.push({path:_tagsList[index+1].path}); 
                                }
                            }
                            _tagsList.splice(index,1);
                        }
                    });
                }
            }
        },
        //页面初始化跳转到第一个页面
        mounted(){
            //跳转到默认展示的页面
            this.$router.push('/contact');
        },
        watch:{
            //监听路由对象是否发生变化
            $route(newVal){
                //判断页面是否已经打开
                var newRouteName = this.$route.meta.title;
                var newRoutePath = this.$route.meta.path;
                var flag = true;
                forEach(this.tagsList,(item,index)=>{
                    if(item.name === newRouteName){
                        flag = false;
                    }
                });
                //将新打开的页面存入tagsList数组中
                if(flag){
                    this.tagsList.push({
                        name:newRouteName,
                        path:newRoutePath
                    });
                }
            }
        }
    }
</script>