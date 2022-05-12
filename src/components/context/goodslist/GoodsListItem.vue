<template>
  <div class="goods-item">
      <img v-lazy="showimg" alt="" @load="ItemImg"  @click="detailload">
      <div class="goods-info"> 
        <p>{{item.title}}</p>
        <span>{{item.price}}</span>
        <span>{{item.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {}
  },
  computed: {
    showimg(){
      //和顺序有关系
      return  this.item.image || this.item.show.img   
    }
  },
  methods:{
    ItemImg(){
        this.$bus.$emit('itemload');
    },
    detailload(){
      this.$router.push('/detail/'+this.item.iid);
      //query的方式
      // this.$router.push({
      //   path:'',
      //   query:{
      //   }
      // })
    }
  }
}
</script>

<style scoped>  
 .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 38%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>