<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
  .tabbar{
    height: 100%;
    width: 100%;
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    background: #fff;
  }
</style>