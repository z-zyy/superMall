<template>
  <div class="title">
    <div v-for="(item,index) in title" 
         :key='index'
         :class="{Active:index==currIndex}"
         @click="itclick(index)" 
    >   
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TitleView",
  data () {
    return {
      currIndex:0
    }
  },
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itclick(index){
      this.currIndex=index;
      this.$emit('itclick',index);
    }
  }
}
</script>

<style scoped>
.title{
  height: 30px;
  width: 100%;
  margin-top:4px;
  display: flex;
  justify-content: space-around;
  font-size:20px;
  background: #fff;
}
.title span{ 
   padding-bottom: 2px;
}
.Active{
  color: var(--color-high-text);
}
.Active span{
  border-bottom: 3px solid pink;
}
</style>