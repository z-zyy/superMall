import axios from "axios";
//axios不需要用Vue.use
  export function request(config){
    const instanes=axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',
      timeout:'5000'
    })
    return instanes(config)
  }