<template>
  <a @click="handleChange" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"><Icon :type="icon" :size="size" /></a>
</template>
<script>
export default {
  name: 'siderTrigger',
  data(){
    return {
      collapsed:false
    }
  },
  props: {
    icon: {
      type: String,
      default: 'navicon-round'
    },
    size: {
      type: Number,
      default: 26
    }
  },
  methods: {
    handleChange () {
      //旋转图标
      this.collapsed = !this.collapsed;
      //发送事件给main.vue
      this.$emit('collapse', this.collapsed);
    }
  }
}
</script>

<style lang="less">
  @import './sider-trigger.less';
</style>