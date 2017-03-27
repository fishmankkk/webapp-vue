<template>
  <div class="con2">
    <x-header :left-options="{backText:''}"  style="position:fixed;top:0px;width: 100%;z-index: 100;">我的</x-header>
    <blur :blur-amount=40 url="https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg" style="margin-top:45px;">
      <p class="center"><img src="../assets/10.png"></p>
    </blur>  
    <divider>世界最傻逼的分割线</divider>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
    <form-preview header-label="用户名" header-value="fishman" :body-items="list" :footer-buttons="buttons1"></form-preview>
    <tabbar style="position:fixed;bottom:0px;">
      <tabbar-item  link="/home">
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item  link="/Shop">
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">狗商城</span>
      </tabbar-item>
      <tabbar-item selected>
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>  
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, Search, Blur, Marquee, MarqueeItem, Divider, FormPreview } from 'vux'

export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Search,
    Blur,
    MarqueeItem,
    Marquee,
    Divider,
    FormPreview
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  },
  data () {
    return {
        asyncCount: 0,
        list: [
              {
                label: '手机号码',
                value: '13632220606'
              },
              {
                label: '邮箱',
                value: '609745278@qq.com'
              },
              {
                label: '性别',
                value: '男'
              }, {
                label: '出生年月',
                value: '2017-03-24'
              }, {
                label: '地区',
                value: '广东省-广州市-天河区'
              }
            ],
          buttons1: [{
            style: 'default',
            text: '注销',
            link: '/'
          }, {
            style: 'primary',
            text: '回到首页',
            link: '/home'
          }],
    }
  }
}
</script>

<style>
.con2{
    text-align: center;
}
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
