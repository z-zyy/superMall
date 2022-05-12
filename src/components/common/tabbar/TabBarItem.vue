<template>
  <div class="tabbaritem" @click="itclick">
    <div v-if="!Isshow">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img_active"></slot>
    </div>
    <div>
      <slot name="text" :style="Isstyle"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props: {
    path:{
      type:String,
    },
  color:{}
  },
  methods:{
    itclick(){
      this.$router.push(this.path);
    }
  },
  computed:{
    Isshow(){
       return this.$route.path.indexOf(this.path)!==-1;
    },
    Isstyle(){

    }
  },

}
</script>

<style scoped>

.tabbaritem img{
  height: 26px;
}
.tabbaritem span{
  font-size:12px;
  padding-bottom:0px;
}
.Acitve{
  background-color: var(--color-tint);
}
</style>