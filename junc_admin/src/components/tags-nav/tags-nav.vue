<template>
  <div class="tags-nav">
    <div class="close-con">
      <Dropdown transfer>
        <el-button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline" />
        </el-button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
          <DropdownItem name="close-others">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="btn-con left-btn">
      <el-button type="text">
        <Icon :size="18" type="ios-arrow-back" />
      </el-button>
    </div>
    <div class="btn-con right-btn">
      <el-button type="text">
        <Icon :size="18" type="ios-arrow-forward" />
      </el-button>
    </div>
    <div class="scroll-outer" ref="scrollOuter">
      <div ref="scrollBody" class="scroll-body">
        <transition-group name="tags">
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TagsNav',
    props: {},
    data () {
      return {
        menuList: {
          others: '关闭其他',
          all: '关闭所有'
        }
      }
    },
    computed: {

    },
    methods: {

    },
    watch: {

    },
    mounted () {

    }
  };
</script>

<style lang="less">
  @import './tags-nav.less';
</style>
