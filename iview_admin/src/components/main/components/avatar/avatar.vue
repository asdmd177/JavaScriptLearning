<style lang="less">
  @import './avatar.less';
</style>

<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
     <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (name) {
      switch (name) {
        case 'logout':
          //TODO 返回登录页面
          alert('返回登录页面');
          break
      }
    }
  }
}
</script>
