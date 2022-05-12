import {ADD_COUNT,ADD_TO_CART} from './mutation-types'
export default {
  [ADD_COUNT](state,payload) {
    payload.count ++
  },
  [ADD_TO_CART](state, payload) {
    //加入购物车的时候会添加一个checked
    payload.checked = true
    state.cartList.push(payload)
  }
}