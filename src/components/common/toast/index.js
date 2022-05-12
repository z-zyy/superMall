import Toast from './Toast'
const obj={}
//自己写Vue的插件,里面已经有一个Vue的参数  
  obj.install=function(Vue){
  //1:创建组件构造器
  const toastConstrutor=Vue.extend(Toast);
  //new一个实例化组件然后挂载
  const toast= new toastConstrutor();
  //挂载到摸一个元素上
  toast.$mount(document.createElement('div'));
  //toast.$el对应的就是div
  document.body.append(toast.$el);
  Vue.prototype.$toast=toast;
}
export default obj