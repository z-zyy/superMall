import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
  const routes=[
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:()=>import('view/home/home.vue')
    },
    {
      path:'/category',
      component:()=>import('view/category/category.vue')
    },
    {
      path:'/cart',
      component:()=>import('view/cart/cart.vue')
    },
    {
      path:'/profile',
      component:()=>import('view/profile/profile.vue')
    },
    {
      path:'/detail/:iid',
      component:()=>import('view/detail/DeTail.vue')
    }
];

  const router= new Router({
    routes,
    mode:'history'
  })
export default router