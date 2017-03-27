<template>
  <div class="con2">
     <swiper :list="goods_list" :loop=true :aspect-ratio=1></swiper>
     <div class="goods-msg" style="padding: 6px;">
         <p style="float:left;width:100%;">
             <span style="width:90%;float:left;">2017年最新款宠物小精灵-皮卡丘 皮卡丘 皮卡丘 皮卡丘</span>
             <img src="../assets/share.png" style="width: 6%;padding: 2%;float: right;">
         </p>
         <p style="float:left;width:100%;">
            <div class="now-price" style="color: #FF5722;float:left;">¥<b style="font-size: 20px;">58</b></div>
            <div class="goods-detail-tag"><li>你最珍贵</li></div>
        </p>
        <p style="float:left;width:100%;font-size: 14px;color: #5b5858;">
            <span style="margin-right: 5px;">价格</span>
            <span style="text-decoration:line-through;">¥158</span></p>
        <p class="msg4" style="float:left;width:100%;">
            <span>快递：免运费</span>
            <span style="text-align:center;">月销555笔</span>
            <span style="text-align:right;">上海</span>
        </p>
     </div>
    <div class="goods-attribute">
        <div class="attribute-tag">
            <x-icon type="ios-checkmark-outline" size="14"></x-icon>
            <span>卖家承诺48小时内发货</span>
        </div>
        <div class="attribute-tag">
            <x-icon type="ios-checkmark-outline" size="14"></x-icon>
            <span>卖家承诺48小时内发货</span>
        </div>
    </div>
<!--    <divider>世界最傻逼的分割线</divider> -->
  </div>
</template>

<script>
import {Divider, SwiperItem, Swiper } from 'vux'
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

const baseList = [{
  img: 'static/img/1.png'
}, {
  img: 'static/img/2.png'
}, {
  img: 'static/img/3.png'
}, {
  img: 'static/img/4.png'
}]
export default {
  components: {
    Divider,
    SwiperItem,
    Swiper
  },
  methods: {

  },
  data () {
    return {
        goods_list: baseList,
    }
  }
}
</script>

<style>
    .con2{text-align: left;}
    .goods-detail-tag li{
        list-style-type: none;
        border: 1px solid #ff5722;
        float: left;
        border-radius: 3px;
        font-size: 12px;
        color: #ff5722;
        margin: 7px 6px;
    }
    .msg4 span{width: 33%;font-size: 14px;color: #5b5858;float: left;}
    .goods-attribute{float: left;width: 100%;background-color: #ececec;}
</style>
