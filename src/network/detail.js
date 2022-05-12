import {request} from './request'
  
export function getdetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    },
  })
}
export function detailRecommend(){
  return request({
    url:'/recommend'
  })
}

export class titleInfo{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.discount=itemInfo.discountDesc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
    this.realPrice=itemInfo.lowPrice;
  }
}
export class shop{
  constructor(shopInfo){
    this.name=shopInfo.name;
    this.shopLogo=shopInfo.shopLogo;
    this.cFans=shopInfo.cFans;
    this.cSells=shopInfo.cSells;
    this.cGoods=shopInfo.cGoods;
    this.score=shopInfo.score;
  }
}
export class ParamInfo {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}