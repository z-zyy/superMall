<template>
  <div>
    <swiper class="swipers">
      <swiper-item v-for="item,index in banner" :key='index'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load='swiperload'>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'MainSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isload:false  
    }
  },
  methods:{
    swiperload(){
      //记录状态，只会发送一次;
      if(!this.isload){
        this.$emit('swiperload');
        this.isload=true;
      }
    }
  }
}
</script>

<style scoped>
.swipers a{
  width: 100%;
  height: 190px;
}
.swipers img{
  width: 100%;
  height: 190px;
}
</style>