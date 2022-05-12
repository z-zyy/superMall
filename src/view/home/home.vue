<template>
  <div id="home">
    <nav-bar>
      <div slot="center" class="navbar">购 物 街</div>
    </nav-bar>
    <title-view  :title="['流行','新款','精选']" 
                   @itclick='ChangeGoods' 
                   ref='Toptabtitle'
                   class="tab-control"
                   v-show="isFixed"
                   ></title-view>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load='true'
            @scroll="ChangePosition"
            @pullingUp="loadmore">
      <main-swiper :banner='banner' class="main-swiper" @swiperload='swiperload'></main-swiper>
      <main-recom  :recommond="recommond"></main-recom>
      <title-view  :title="['流行','新款','精选']" 
                   @itclick='ChangeGoods' 
                   ref='tabtitle'
                   v-show="!isFixed"
                   ></title-view>
      <goods-list :goods="ShowGoods"></goods-list>
    </scroll>
    <back-top v-show="ShowBcakTop" @click.native="backtop"></back-top>
  </div>
</template>    
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import MainSwiper from './childhome/mainswiper/MainSwiper'
import MainRecom from './childhome/mainrecom/MainRecom'
import TitleView from './childhome/titleview/TitleView'
import GoodsList from 'components/context/goodslist/GoodsList'
import Scroll from '@/betterscroll/Scroll.vue'
import BackTop from 'components/context/backtop/BackTop'
import {getHome,getHomeData} from 'network/home'
import { MixImg } from 'components/utils/mixin'
export default {
  name:'home',
  components: {
    NavBar,
    MainSwiper,
    MainRecom,
    TitleView,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins: [MixImg],
  data () {
    return {
      banner:[],
      recommond:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currType:'pop', 
      taboffsettop:0,
      isFixed:false,
      saveY:0,
    }
  },
  //发送网络请求
  created () {
    this.getHome();
    this.getHomeDate('pop'),
    this.getHomeDate('new'),
    this.getHomeDate('sell')
  },
  //挂载上前之后但是图片可能未加载；
  mounted(){
    //$el获取组件的元素,所有的组件都有一个$el;
    //console.log(this.$refs.tabtitle.$el.offsetTop);
    //对监听的事件进行保存
  },
  // activated(){
  //   console.log('actived');
  //keep-alive 保持原来的位置 
  // },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY);
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getscrollY();
    //在当前组件中取消全局事件
    //否则会取消全部事件
    this.$bus.$off('itemload',this.itemImgListen);
  },
  computed: {
    ShowGoods(){
      return this.goods[this.currType].list;
    },
  },
  methods:{
    //监听事件
    ChangePosition(position){
      //吸顶效果 判断backTop是否显示
      this.isFixed=(-position.y)>this.taboffsettop;
      this.ShowBcakTop=(-position.y)>1000;
    }, 

    //监听上拉加载更多
    loadmore(){
      this.getHomeDate(this.currType);
    },
    //siwper监听加载完成
    //swiperload会印象加载offsetTop
    swiperload(){
      this.taboffsettop=this.$refs.tabtitle.$el.offsetTop;
    },
    //改变类型
    ChangeGoods(index){
      //2getitleview保持一致
      switch(index){
        case 0:
          this.currType='pop';
          break;
        case 1:
          this.currType='new';
          break;
        case 2:
          this.currType='sell';
          break;    
      }
      //使两个组件之间的index互相通信
      this.$refs.Toptabtitle.currIndex=index;
      this.$refs.tabtitle.currIndex=index;
    },
    //网络请求函数
    getHome(){
      getHome().then(res=>{
        this.banner=res.data.data.banner.list;
        this.recommond=res.data.data.recommend.list;
      })
    },
    getHomeDate(type){
      //为什么type必须要用String,因为要传递到url中
      const page=this.goods[type].page+1;
      getHomeData(type,page).then(res=>{
        //3个点很重要,否则无法解析出list数组中的元素
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        //完成上拉加载更多，才会显示更多东西
        this.$refs.scroll.finishPullUp();
      })
    },
  }
}
</script>
<style scoped>
#home{
  height: 667px;
  width: 375px;
}
.navbar{
  width: 393px;
  line-height: 44px;
  height: 44px;
  position: fixed;
  top: 0px;
  left:-18px;
  z-index: 3;
  color:#fff;
  background-color: var(--color-tint);
}
.main-swiper{
  margin-top:44px;
}
.content{
  height: 574px;
}
/* offsettop:当前位置到顶端的位置 */
.tab-control{
  margin-top: 44px;
  text-align: center;
  position:relative;
  background-color:#fff;
  z-index: 3;
}
</style>