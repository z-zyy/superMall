<template>
  <div v-if="Object.keys(title).length !==0" class="base-info">
  <!-- Object.keys(object).length判断title的长度，类似与数组的判断长度 -->
    <div class="info-title">{{title.title}}</div>
    <div class="info-price">
      <span class="n-price">{{title.newPrice}}</span>
      <span class="o-price"><del>{{title.oldPrice}}</del></span>
      <span v-if="title.discount"><sup class="discount">{{title.discount}}</sup></span>
    </div>
    <div class="info-other">
      <span>{{title.columns[0]}}</span>
      <span>{{title.columns[1]}}</span>
      <span>{{title.services[title.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <!-- index是从1开始,所以需要减去1 -->
      <span class="info-services-item" v-for="index in title.services.length-1" :key="index">
        <img v-if="title.services[index-1].icon" :src="title.services[index-1].icon" alt="">
        <span>{{title.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailTitle",
  props: {
    title:{
      type:Object,
      default(){
        return {}
      }
    }
  },

}
</script>

<style scoped>
.base-info{
  display: flex;
  flex-direction: column;
}
.info-title{
  margin: 5px;
  font-size: 18px;
  color: black;
}
.info-price{
  margin-bottom: 24px;
}
.n-price{
  color: pink;
  font-size: 28px;
  margin: 4px;
}
.o-price{
  margin: 2px;
}
.discount{
  color: white;
  font-size: 16px;
  background-color:pink;
  border-radius: 25%;
}
.info-other{
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.info-services{
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  outline: 1px black solid;
  line-height: 40px;
  text-align: center;
}
.info-services img{
  width: 16px;
  height: 16px;
}
</style>