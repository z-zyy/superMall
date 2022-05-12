<template>
  <div class="detailswiper">
    <swiper class="swipersss">
      <swiper-item v-for="item,index in topImg" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// keepalive:exclude就不会keep-alive
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImg:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.swipersss{
  height: 200px;
  overflow: hidden;
}
</style>