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
  import tagsList from '../../fake-data/navTagsList.js'

  export default {
    name: 'TagsNav',
    props: {},
    data () {
      return {
        "scrollBodyLeft":0,
        "tagsList":tagsList
      }
    },
    methods: {
      handleScroll(val) {
        var scrollBody = this.$refs.scrollBody;
        this.scrollBodyLeft += val;
        scrollBody.style.transform = 'translateX('+this.scrollBodyLeft+'px)';
      },
      handleClick(tagName) {
        for(let i = 0; i < this.tagsList.length; i++){
          var item = this.tagsList[i];
          if(item.name == tagName && item.color === 'primary'){
            break;
          }else if(item.name == tagName){
            item.color = 'primary'
          }else if(item.color === 'primary'){
            item.color = 'default'
          }
        }
      },
      handleClose(tagName) {
        let index = this.tagsList.findIndex((tag)=>{
          return tag.name === tagName
        });
        if(tagsList[index].color == 'primary'){
            this.tagsList[index-1].color = 'primary'
        }
        this.tagsList.splice(index,1);
      }
    },
    created () {

    }
  };
</script>

<style lang="less">
  @import './tags-nav.less';
</style>
