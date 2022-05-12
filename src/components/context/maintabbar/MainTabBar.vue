<template>
  <div class="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.maintabbar{
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>