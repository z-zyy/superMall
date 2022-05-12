<template>
  <div class="toast" v-show="Isshow">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data () {
    return {
      message:'',
      Isshow:false  
    }
  },
  methods:{
    show(message,duration=2000){
      this.Isshow=true;
      this.message=message;
      //关闭弹窗
      setTimeout(()=>{
        this.message='';
        this.Isshow=false;
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  z-index: 9;
  color: white;
  padding: 8px 10px;
  background: rgba(0,0,0,.8);
  top:50%;
  border-radius: 5%;
  text-align: center;
  line-height:30px;
  transform: translate(-50%,-50%);
  left:50%;
}
</style>