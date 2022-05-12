<template>
  <div class="nav-bar">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  justify-content: space-around;
  width: 100%;
  line-height: 44px;
  height: 44px;
  position: fixed;
  top: 0px;
  text-align: center;
  z-index: 3;
}
</style>