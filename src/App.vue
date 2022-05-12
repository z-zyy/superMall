<template>
  <div id="app">
    <keep-alive exclude="DeTail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/context/maintabbar/MainTabBar'
export default {
  name:'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
 @import 'assets/css/base.css';
 @import 'assets/css/normalize.css'
</style>
