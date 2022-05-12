<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
           :key="index" :src="item" 
           @load="imgload" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  data () {
    return {
      counter:0,
      imgLength:0
      // imgLength：默认会是一个0；
    }
  },
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgload(){
      if(++this.counter===this.imgLength){
        this.$emit('imgload')
      }
    }
  },
  //watch:监听某个属性的变化
  watch: {
    detailInfo(){
      // console.log(this.detailInfo===newValue);true
      this.imgLength=this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style  scoped>
.info-list img{
  width: 100%;
  height: auto;
}
</style>