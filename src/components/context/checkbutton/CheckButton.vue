<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="选中" v-if="checked">
    <img src="~/assets/img/cart/unchecked.svg" alt="未选中" v-else>
  </div>
</template>
<script>
export default {
 name:'CheckButton',
 props:{
   checked:{
     type:Boolean,
     default:true
   }
 }
}
</script>

<style scoped>
.check-button img{
   width: 20px;
   height: 20px;
 }
</style>