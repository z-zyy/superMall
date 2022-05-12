<template>
  <div class="mainrecom">
    <re-com>
      <re-com-item v-for="item,index in recommond" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div class="item">{{item.title}}</div>  
      </re-com-item>
    </re-com>
  </div>
</template>

<script>
import ReCom from 'components/common/recom/ReCom.vue'
import ReComItem from 'components/common/recom/ReComItem.vue'
export default {
  name:"MainRecom",
  components:{
    ReCom,
    ReComItem
  },
  props:{
    recommond:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.mainrecom{
  height: 95px;
  width: auto;
  border-bottom: 6px solid #A9A9A9;
}
.item{
  margin-bottom:6px;
}
</style>