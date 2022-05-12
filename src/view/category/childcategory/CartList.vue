<template>
  <div class="cart-list">
    <scroll class="contain" ref="scroll">
      <cart-list-item v-for="(item,index) in list" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import CartListItem from './CartListItem.vue'
import Scroll from "../../../betterscroll/Scroll.vue"
export default {
  name:'CartList',
  components:{
    Scroll,
    CartListItem,
  },
   computed: {
     ...mapGetters({
       list:'cartList'
     })
   },
   activated(){
     this.$refs.scroll.refresh();
   }
}
</script>

<style scoped>
.contain{
  height: 574px;
  width: 100%;
  position: relative;
  top:44px;
  z-index: 3;
  overflow: hidden;
}
.list-info{
  overflow: hidden;
}
</style>