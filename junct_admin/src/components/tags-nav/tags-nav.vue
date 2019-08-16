<template>
  <div class="tags-nav">
    <div class="close-con">
      <Dropdown transfer>
        <el-button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline" />
        </el-button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="btn-con left-btn">
      <el-button type="text" @click="handleScroll(200)">
        <Icon :size="18" type="ios-arrow-back" />
      </el-button>
    </div>
    <div class="btn-con right-btn">
      <el-button type="text" @click="handleScroll(-200)">
        <Icon :size="18" type="ios-arrow-forward" />
      </el-button>
    </div>
    <div class="scroll-outer" ref="scrollOuter">
      <div class="scroll-body" ref="scrollBody">
        <!-- lightSpeedOut -->
        <transition-group leave-active-class="animated lightSpeedOut">
          <Tag 
            type="dot" 
            v-for="(tag,index) in tagsList" 
            :color="tag.color" 
            :key="tag.name"
            :closable="!(tag.name=='mainpage')"
            @click.native="handleClick(tag.name)"
            @on-close="handleClose(tag.name)">{{tag.title}}</Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TagsNav',
    props: ["tagsList"],
    data () {
      return {
        "scrollBodyLeft":0
      }
    },
    methods: {
      handleScroll(val) {
        var scrollBody = this.$refs.scrollBody;
        this.scrollBodyLeft += val;
        let minus = this.$refs.scrollOuter.offsetWidth - scrollBody.offsetWidth;
        if(this.scrollBodyLeft < minus){
            this.scrollBodyLeft = minus;
        }
        if(this.scrollBodyLeft > 0){
          this.scrollBodyLeft = 0;
        }
        scrollBody.style.transform = 'translateX('+this.scrollBodyLeft+'px)';
      },
      handleClick(tagName) {
        this.$eventHub.$emit("tag-click",tagName);
      },
      handleClose(tagName) {
        //scrollBody
        this.$eventHub.$emit("tag-close",tagName);
      }
    }
  };
</script>

<style lang="less">
  @import './tags-nav.less';
</style>
