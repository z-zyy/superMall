import {debounce} from './utils.js'
export const MixImg={
  data () {
    return {
      itemImgListen:null,
      ShowBcakTop:false,
    }
  },
  mounted () {
    const refresh=debounce(this.$refs.scroll.refresh,200);
    this.itemImgListen=()=>{
      refresh();
    }
    this.$bus.$on('itemload',this.itemImgListen);
  },
  methods: {
        //返回顶部
        backtop(){
          this.$refs.scroll.scrollTo(0,0,800);
        }
  }
}