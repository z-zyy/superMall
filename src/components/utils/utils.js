//防抖动函数
export function debounce(func,delay=200){
    let timer=null;
      return function(...args){
        if(timer){
          clearTimeout
        } 
        timer=setTimeout(()=>{
        //settimeout(){} this的默认指向的是window
        //箭头函数的this指向是当前上下文(context)的对象
        //setTiemOUT默认指向的对象是window
        //调用aplly,使this指向组件对象
        //apply中的参数是数组,所以用...
          func.apply(this,args)
        },delay)
      }
}
// 时间戳格式化
export function formatDate(date, fmt) {
  //1:获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2：
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}