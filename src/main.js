import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store/index'
import toast from 'components/common/toast/index.js'
import fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'
//懒加载
Vue.use(Vuelazyload,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
//安装插件
Vue.use(toast)
//fastclick
fastclick.attach(document.body)
Vue.prototype.$bus=new Vue()
new Vue({
  render: h => h(App),
  router,
  store
  //mount:挂载元素的意思
}).$mount('#app')
