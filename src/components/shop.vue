<template>
  <div>
    <div class="con3">
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel"></search>  
        <div>
           <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
          </tab>
        </div>
        <div class="goods-list">
            <div class="one-goods" v-for="i in goodsList">
                <router-link :to="i.url" style="float:right">
                    <div class="goods-img"><img :src="i.img"></div>
                    <div class="goods-msg">
                        <p class="goods-name">{{i.title}}</p>
                        <p style="float:left;width:100%;">
                            <span class="free-express-tag" v-show="i.isFreeExpress">包邮</span>
                            <span class="goods-address">{{i.address}}</span>
                        </p>
                        <p><span class="goods-price">¥{{i.price}}</span></p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <tabbar style="position:fixed;bottom:0px;">
      <tabbar-item link="/home">
        <x-icon type="ios-arrow-up"></x-icon>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item selected>
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
import { XHeader, Tabbar, TabbarItem, Search, Tab, TabItem, Sticky, Divider, Swiper, SwiperItem } from 'vux'
const list = () => ['全部', '精选', '尖货', 'VIP'];
const shopList = [{
  url: '/Detail',
  img: 'static/img/1.png',
  title: '宠物小精灵-波波',
  price:"50",
  isFreeExpress:true,
  address:"上海"
}, {
  url: 'javascript:',
  img: 'static/img/2.png',
  title: '宠物小精灵-独角虫',
  price:"100",
  isFreeExpress:true,
  address:"广州"
}, {
  url: 'javascript:',
  img: 'static/img/3.png',
  title: '宠物小精灵-猴怪',
  price:"520",
  isFreeExpress:true,
  address:"北京"
}, {
  url: 'javascript:',
  img: 'static/img/4.png',
  title: '宠物小精灵-杰尼龟',
  price:"510",
  isFreeExpress:false,
  address:"杭州"
}, {
  url: 'javascript:',
  img: 'static/img/5.png',
  title: '宠物小精灵-卡比兽',
  price:"300",
  isFreeExpress:true,
  address:"新疆"
}, {
  url: 'javascript:',
  img: 'static/img/6.png',
  title: '宠物小精灵-可达鸭',
  price:"190",
  isFreeExpress:true,
  address:"东莞"
}, {
  url: 'javascript:',
  img: 'static/img/7.png',
  title: '宠物小精灵-喇叭芽',
  price:"989",
  isFreeExpress:true,
  address:"河南"
}, {
  url: 'javascript:',
  img: 'static/img/8.png',
  title: '宠物小精灵-绿毛虫',
  price:"99",
  isFreeExpress:false,
  address:"三亚"
}, {
  url: 'javascript:',
  img: 'static/img/9.png',
  title: '宠物小精灵-迷你龙',
  price:"300",
  isFreeExpress:true,
  address:"新疆"
}, {
  url: 'javascript:',
  img: 'static/img/10.png',
  title: '宠物小精灵-喵喵',
  price:"89",
  isFreeExpress:true,
  address:"河南"
}, {
  url: 'javascript:',
  img: 'static/img/11.png',
  title: '宠物小精灵-妙花种子',
  price:"199",
  isFreeExpress:false,
  address:"三亚"
}, {
  url: 'javascript:',
  img: 'static/img/12.png',
  title: '宠物小精灵-比卡丘',
  price:"3990",
  isFreeExpress:true,
  address:"新疆"
}, {
  url: 'javascript:',
  img: 'static/img/13.png',
  title: '宠物小精灵-小火龙',
  price:"99",
  isFreeExpress:false,
  address:"三亚"
}, {
  url: 'javascript:',
  img: 'static/img/14.png',
  title: '宠物小精灵-伊布',
  price:"90",
  isFreeExpress:true,
  address:"新疆"
}]
export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Search,
    Tab,
    TabItem,
    Sticky,
    Divider,
    Swiper,
    SwiperItem
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: 'test',
      list2: list(),
      demo2: '全部',
      index: 0,
      goodsList:shopList
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style>
.one-goods{float: left;width: 48%;margin: 1%;background-color: #fff;}
.one-goods .goods-img{padding: 20px;}
.one-goods .goods-img img{width: 100%;}
.one-goods .goods-name{font-size: 13px;color: #000;}
.one-goods .goods-msg{float: left;width: 90%;margin: 2% 5%;}
.one-goods .free-express-tag{font-size: 12px;color: #fff;background-image:-webkit-linear-gradient(to left, orange, green); background-image:linear-gradient(to left,orange,green);float: left;padding: 0px 3px;border-radius: 5px;}
.one-goods .goods-address{font-size: 13px;color: #ccc;float: right;}
.one-goods .goods-price{font-size: 16px;color: #FF5722;font-weight: bolder;}
</style>
