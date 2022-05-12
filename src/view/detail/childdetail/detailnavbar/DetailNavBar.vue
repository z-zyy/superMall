<template>
    <div id='detail'>
    <nav-bar>
      <div slot="left" class="back" @click="histryback">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="item,index in titles" 
             :key="index"
             :class="{active:currIndex===index}"
             @click="itclick(index)">{{item}}
        </div>
      </div>  
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currIndex:0
    }
  },
  methods: {
    itclick(index){
      this.currIndex=index;
      this.$emit('itclick',index);
    },
    histryback(){
      this.$router.go(-1);
      //history.go(-1);
    }
  }
}
</script>

<style scoped>
#detail{
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.back{
  width: 100%;
  height: 100%;
}
.back img{
  width: 28px;
  height: 28px;
  padding-top:14px;
}
.title{
  width: 340px;
  display: flex;
  justify-content: space-around;
  font-size:14px;
}
.active{
color: var(--color-high-text);
}
</style>