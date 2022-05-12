<template>
  <div class="bottom-bar">
    <div class="checked">
      <check-button class="check_img" 
                    @click.native="ItClick" 
                    v-model="list.checked" 
                    :checked="ShowTotal">
      </check-button>
      <span>全选</span>
    </div>
    <div class="price">
      <span>合计: </span>
      <span>{{total | showPrice}}</span>
    </div>
    <div class="pay">
      <span>去计算 ({{CheckAmount}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from 'components/context/checkbutton/CheckButton.vue'
export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed: {
    ...mapGetters({
      list:'cartList'
    }),
    //计算总价格
    total(){
      if(this.list.length===0){
        return 0
      }
      else{
        return this.list.filter(res=>{
          return res.checked
        }).reduce((newres,oldres)=>{
          return newres+oldres.realPrice*oldres.count
        },0).toFixed(2)
      }
    },
    //计算商品数量
    CheckAmount(){
      return this.list.filter(res=>{
        return res.checked;
      }).length;
    },
    //全选按钮
    ShowTotal(){
      // 0取反是一个true 数字取反是一个true
      // return !(this.list.filter(res=>!res.checked).length)、
      if(this.list.length===0){
        return false
      }
      else{
        return !this.list.find(res=>!res.checked)
      }
    }
  },
  filters:{
    showPrice(res){
        return '￥'+res
    }
  },
  methods:{
    //全选和全不选择
    ItClick(){
      if(this.CheckAmount===this.list.length){
        this.list.forEach(res => {
          res.checked=false;
        });
      }
      else{
        this.list.forEach(res=>{
          res.checked=true;
        })
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0px;
}
.bottom-bar{
  display: flex;
  justify-content: space-between;
  height: 44px;
  position: fixed;
  background-color: #fff;
  border-radius: 5%;
  z-index: 5;
  bottom: 49;
  left: 0;
  right: 0;
}
.checked{
  width: 25%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  text-align: center;
}
.check_img{
  margin-top:3px;
  margin-right:2px;
}
.price{
  width: 45%;
  height: 44px;
  line-height: 44px;
  text-align: left;
}
.pay{
  background:#87CEFA;
  width: 30%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
</style>