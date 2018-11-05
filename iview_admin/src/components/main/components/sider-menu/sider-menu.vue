<style lang="less">
  @import './sider-menu.less';
</style>

<template>
  <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="handleSelect">
      <div class="layout-logo">iview框架管理后台示例</div>
      <!-- <Divider /> -->
      <Submenu name="table">
          <template slot="title">
              <Icon type="ios-navigate"></Icon>
              表格
          </template>
          <MenuItem name="contact">通讯录</MenuItem>
          <MenuItem name="tableTree">表格树</MenuItem>
          <MenuItem name="3">Option 3</MenuItem>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-keypad"></Icon>
              树
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
      </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: 'siderMenu',
    data(){
        return {
          
        }
    },
    methods: {
        handleSelect(name){
          this.$emit('on-select',name);
        }
    }
  }
</script>
