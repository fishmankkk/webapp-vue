<template>
  <div>
    <x-header :left-options="{backText: ''}"  style="position:fixed;top:0px;width: 100%;z-index: 100;">世界和狗</x-header>
    <swiper :list="demo01_list" :auto="true" :loop=true></swiper>
    <card>
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">
            <span>距离世界狗年还有：</span>
            <clocker :time="time1"></clocker>
        </p>
        <p style="font-size:14px;line-height:1.2;">这个世界除了单身狗还有双身狗，异性恋狗，同性恋狗，你是什么狗，爱着什么狗？</p>
      </div>
    </card>
    <card :header="{title:'世界狗类'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1130</span>
          <br/>
          单身狗
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          双身狗
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          异性恋狗
        </div>
        <div>
          <span>88</span>
          <br/>
          同性恋狗
        </div>
      </div>
    </card>
      
    <div style="margin: 10px;overflow: hidden;margin-bottom:60px;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
      
    <tabbar style="position:fixed;bottom:0px;">
      <tabbar-item selected>
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item  link="/Shop">
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">狗商城</span>
      </tabbar-item>
      <tabbar-item  link="/Me">
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>  
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, Group, Cell, SwiperItem, Swiper, Card, Clocker, Masker} from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

export default {
  components: {
    Masker,
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    SwiperItem,
    Swiper,
    Card,
    Clocker
  },
  ready () {
    setTimeout(() => {
      this.time1 = '2017-08-13 22:54'
    }, 5000)
  },
  data () {
    return {
        demo01_list: baseList,
        time1: '2017-07-13 21:54',

          list: [{
            title: '世界最强，金刚电影上映',
            img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
          }, {
            title: 'gay里gay气，是社会逼狗，还是狗逼社会？',
            img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
          }, {
            title: '愿所有梦想都想增肥一样容易实现',
            img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
          }]
    }
  }
}
</script>

<style>
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
