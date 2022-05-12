<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from './childcategory/CartList'
import CartBottomBar from './childcategory/CartBottomBar.vue'
import { mapGetters } from "vuex"
export default {
  name:'category',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
  }
}
</script>

<style scoped>
#cart{
  height:667px;
  width: 100%;
}
.nav-bar{
  background-color: var(--color-tint);
  font-weight: 700;
  font-size:20px;
  color: #fff;
}
</style>