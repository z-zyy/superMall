<template>
  <div class="recom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'ReCom'
}
</script>

<style scoped>
.recom{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}
</style>