<template>
  <div id="Detail">
    <detail-nav-bar class="detail-navbar" ref="navbar" @itclick="navclick"></detail-nav-bar>
    <scroll class="detail-content" 
            ref="scroll" 
            @scroll="ChangePosition"
            :probe-type="3">
      <detail-swiper :top-img='topImg'></detail-swiper>
      <detail-title :title="title"></detail-title>
      <detail-sell :shop="shopInfo"></detail-sell>
      <detail-goods-info :detail-info="detailInfo" @imgload="detailload">
      </detail-goods-info>
      <goods-param :param-info="paraminfo" ref="paraminfo"></goods-param>
      <detaiil-comment :comment-info="commentInfo" ref="comment"></detaiil-comment>
      <goods-list :goods="detaillist" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"></detail-bottom-bar>
    <back-top  @click.native="backtop" v-show="ShowBcakTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childdetail/detailnavbar/DetailNavBar.vue'
import DetailSwiper from './childdetail/detailswiper/DetailSwiper.vue'
import DetailTitle  from './childdetail/detailtitle/DetailTitle.vue' 
import DetailSell from './childdetail/detailseller/DetailSell.vue'
import DetailGoodsInfo from './childdetail/detailgoodsInfo/DetailGoodsInfo.vue'
import GoodsParam from './childdetail/goodsparam/GoodsParam.vue'
import DetaiilComment from './childdetail/comment/DetailComment.vue'
import Scroll from '@/betterscroll/Scroll.vue'
import GoodsList from 'components/context/goodslist/GoodsList.vue'
import BackTop from 'components/context/backtop/BackTop.vue'
import DetailBottomBar from './childdetail/detailbottombar/DetailBottomBar.vue'
import { mapActions } from "vuex"
import { debounce } from '../../components/utils/utils'
import { MixImg } from 'components/utils/mixin'
import {getdetail,titleInfo,shop,ParamInfo,detailRecommend} from 'network/detail.js'
export default {
  name:'DeTail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailTitle,
    DetailSell,
    DetailGoodsInfo,
    GoodsParam,
    DetaiilComment,
    GoodsList,
    BackTop,
    Scroll,
    DetailBottomBar
  },
  mixins: [MixImg],
  data () {
    return {
      iid:null,
      topImg:[],
      title:{},
      shopInfo:{},
      detailInfo:{},
      paraminfo:{},
      commentInfo:{},
      detaillist:[],
      cuIndex:0,
      themeTopY:[],
      positionY:[],
      getThemeY:null,
      currIndex:0,
    }
  },
  created () {
    //保存iid
    this.iid=this.$route.params.iid;
    //网络请求
    this.getdetail(this.iid);
    this.detailRecommend();
    this.getThemeY=debounce(()=>{
      this.themeTopY=[];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.paraminfo.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    },200)
  },
  mounted () {
  },
  //数据更新
  updated () {
    //这种方法是可以的
    // //先赋一个空值
    // this.themeTopY=[];
    // this.themeTopY.push(0);
    // this.themeTopY.push(this.$refs.paraminfo.$el.offsetTop);
    // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeTopY);
  },
  destroyed () {
    this.$bus.$off('itemload','this.imgListener')
  },
  methods: {
    //
    ...mapActions({
      add:'addCart'
    }),
    getdetail(iid){
      getdetail(iid).then(res=>{
        const data=res.data.result;
        //轮播图的数据
        this.topImg=res.data.result.itemInfo.topImages;
        //title数据请求
        this.title=new titleInfo(data.itemInfo,data.columns,data.shopInfo.services);
        //shop的数据请求
        this.shopInfo=new shop(data.shopInfo);
        //detail图片数据请求
        this.detailInfo = data.detailInfo;
        //商家信息数据请求
        this.paraminfo=new ParamInfo(data.itemParams.info,data.itemParams.rule)
        //comment数据请求
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate.list[0];
        }
      })
    },
    detailRecommend(){
      detailRecommend().then(res=>{
        const data=res.data.data;
        this.detaillist=data.list;
      })
    },
    //navbar跳转
    navclick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index]+35,500);
    },
    //info的图片刷新
    detailload(){
      //当info的图片的加载完成后刷新新的offsetTop
      this.$refs.scroll.refresh();
      this.getThemeY();
    },
    //scroll事件
    ChangePosition(position){
      //隐藏返回顶部
      this.ShowBcakTop=(-position.y>500);
      //获取y值
      let positionY=-position.y;
      //与theme中的y值做对比
      let length=this.themeTopY.length;
      //普通做法
      for(let i=0;i<length-1;i++){
      //   if(this.currIndex!==i&&(((i<length-1)&&(positionY>=this.themeTopY[i]&&positionY<this.themeTopY[i+1]))||(i===length-1&&positionY>=this.themeTopY[i]))){
      //     this.currIndex=i;
      //     this.$refs.navbar.currIndex=this.currIndex;
      //   }
      //可以给最后添加一个很大的数来减少一个条件 然后length-1;
      //需要判断的条件会更少  用空间换时间
        if((this.currIndex!==i)&&(positionY>=this.themeTopY[i]&&positionY<=this.themeTopY[i+1])){
          this.currIndex=i;
          this.$refs.navbar.currIndex=this.currIndex;
        }
      }
    },
    //加入购物车
    addToCart(){
      //获取内容购物车需要展示的信息
      const product={};
      product.iamge=this.topImg[0];
      product.title=this.title.title;
      product.desc=this.title.desc;
      product.realPrice=this.title.realPrice;
      product.iid=this.iid;
      //商品添加到购物车，使用Vuex
      //this.$store.commit('addCart',product);
      //disapath是一个可以异步的操作
      // this.$store.dispatch('addCart', product).then(res=>{
      //   console.log(res);
      // })
      this.add(product).then(res=>{
        //插件的用法
        this.$toast.show(res,1000);
        //常规方法
        // this.Isshow=true;
        // this.message=res;
        // //关闭弹窗
        // setTimeout(()=>{
        //   this.message="";
        //   this.Isshow=false;
        // },1000)
      
      })
      //加入购物车

    }
  }
}
</script>

<style scoped>
#Detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 667px;
  width: 100%;
}
.detail-navbar{
  position: relative;
  z-index: 9;
  background: #fff;
}
.detail-content{
  height: 574px;
  width: 100%;
}
</style>