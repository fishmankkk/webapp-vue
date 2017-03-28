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
    <div class="goods-attribute" @click="showattributeFunc">
        <div class="attribute-tag">
            <x-icon type="ios-checkmark-outline" size="15"></x-icon>
            <span>卖家承诺48小时内发货</span>
        </div>
        <div class="attribute-tag">
            <x-icon type="ios-checkmark-outline" size="15"></x-icon>
            <span>新品</span>
        </div>
        <div class="attribute-tag">
            <x-icon type="ios-checkmark-outline" size="15"></x-icon>
            <span>7天无理由</span>
        </div>
        <div class="float_right right-icon">
            <x-icon type="ios-arrow-right" size="20"></x-icon>
        </div>
    </div>
     <group  style="width:100%;float:left;">
        <cell :title="sizeChoose" @click.native="sizechooseFunc" style="font-size:14px;">
                <div class="float_right">
                <x-icon type="ios-arrow-right" size="20"></x-icon>
            </div>
        </cell>
         <cell title="产品参数" @click.native="sizechooseFunc" style="font-size:14px;">
                <div class="float_right">
                <x-icon type="ios-arrow-right" size="20"></x-icon>
            </div>
        </cell>
    </group>
<!--    <divider>世界最傻逼的分割线</divider> -->
    <popup v-model="showattribute" height="400px" >
        <div class="popcontent">
              <p>服务说明</p>
              <div class="pop-content-list">
                <li>
                    <x-icon type="ios-checkmark-outline" size="20"></x-icon>
                    <span>7天无理由</span>
                </li>
                <li>
                    <x-icon type="ios-checkmark-outline" size="20"></x-icon>
                    <span>新品</span>
                </li>
                <li>
                    <x-icon type="ios-checkmark-outline" size="20"></x-icon>
                    <span>集分宝</span>
                </li>
                <li>
                    <x-icon type="ios-checkmark-outline" size="20"></x-icon>
                    <span>如实描述</span>
                </li>
              </div>
              <x-button type="primary" class="attribute-pop-sure" @click.native="showattributeFunc">完成</x-button>
        </div>
    </popup>
    <popup v-model="showsize" height="500px" >
        <div class="pop-body">
            <div class="size-top float_left width-100">
                <div class="img"><img src="../assets/1.png"></div>
                <div class="goods-pop-msg float_left" style="margin: 10px 0 0 20px;">
                    <p class="organ-font">春上新¥158</p>
                    <p class="font-12">库存884件</p>
                    <p class="font-12">{{sizeChoose}}</p>
                </div>
            </div>
            <div class="select-line">
                <divider>尺码</divider>
                <checker v-model="size" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                      <checker-item value="XS" @on-item-click="onSizeClick">XS</checker-item>
                      <checker-item value="S" @on-item-click="onSizeClick">S</checker-item>
                      <checker-item value="M" @on-item-click="onSizeClick">M</checker-item>
                      <checker-item value="L" @on-item-click="onSizeClick">L</checker-item>
                </checker>    
            </div>
            <div class="select-line">            
                <divider>颜色</divider>
                <checker v-model="color" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                      <checker-item value="白" @on-item-click="onColorClick">白</checker-item>
                      <checker-item value="红" @on-item-click="onColorClick">红</checker-item>
                      <checker-item value="粉" @on-item-click="onColorClick">粉</checker-item>
                </checker>
            </div>
            <div class="select-line">
                <divider>颜色</divider>
                <group>
                    <x-number title="数量" v-model="numValue"></x-number>
                </group>
            </div>
        </div>
        <div class="bottom-pos width-100">
              <x-button type="warn" class=" width-50 float_left size-pop-btn" @click.native="sizePopresetFunc">重置</x-button>
              <x-button type="primary" class=" width-50 float_left size-pop-btn" @click.native="sizePopSureFunc">确定</x-button>
        </div>
    </popup>
  </div>
</template>

<script>
import Vue from 'vue'
import {Divider, SwiperItem, Swiper, Popup, XButton, Cell, Group, Checker, CheckerItem, XNumber, Flexbox, FlexboxItem  } from 'vux'
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
    Swiper,
    Popup,
    XButton,
    Cell,
    Group,
    Checker,
    CheckerItem,
    Divider,
    XNumber,
    Flexbox,
    FlexboxItem
  },
  methods: {
      showattributeFunc(){
          if(this.showattribute){
              this.showattribute=false;
          }else{this.showattribute=true;}
      },
      sizechooseFunc(){
          if(this.showsize){
              this.showsize=false;
          }else{this.showsize=true;}
      },
      onSizeClick (value, disabled) {
          console.log(value, disabled)
          if(this.color!=''){
              this.sizeChoose="已选 "+value+" "+this.color;
          }else{
              this.sizeChoose="请选择 颜色";
          }
          if (!this.disabled) {
            this.showPopup = false
          }
      },
      onColorClick (value, disabled) {
          console.log(value, disabled)
          if(this.size!=''){
              this.sizeChoose="已选 "+this.size+" "+value;
          }else{
              this.sizeChoose="请选择 尺寸";
          }
          if (!this.disabled) {
            this.showPopup = false
          }
      },
      sizePopresetFunc(){
          this.size='';
          this.color='';
          this.numValue=1;
          this.sizeChoose="请选择 尺寸 颜色";
          this.showsize=false;
      },
      sizePopSureFunc(){
          this.showsize=false;
      }
  },
  data () {
    return {
        goods_list: baseList,
        showattribute:false,
        showsize:false,
        sizeChoose:"请选择 尺寸 颜色",
        size:'',
        color:'',
        numValue:1
    }
  }
}

</script>

<style>
    .float_left{float: left;} 
    .float_right{float: right;} 
    .width-100{width: 100%;} img{width: 100%;} 
    .width-50{width: 50%;}
    .font-12{font-size: 12px;}
    .organ-font{color: #ff5722;}
    .con2{text-align: left;} 
    .goods-detail-tag li{ list-style-type: none; border: 1px solid #ff5722; float: left; border-radius: 3px; font-size: 12px; color: #ff5722; margin: 7px 6px; } 
    .msg4 span{width: 33%;font-size: 14px;color: #5b5858;float: left;} 
    .goods-attribute{float: left;width: 100%;background-color: #ececec;padding-top: 2px;} 
    .goods-attribute .right-icon{fill: #5f5e5e;margin-top: 2px;}
    .attribute-tag{ font-size: 12px; color: #ff5722; float: left; height: 20px; margin:3px 10px;} 
    .attribute-tag .vux-x-icon { fill: #ff5722; float: left; } 
    .attribute-tag span{ margin-top: -1px; float: left; } 
    .popcontent p{text-align: center;font-weight: 600;color: #000;margin-top: 30px;} 
    .popcontent .pop-content-list li{list-style-type: none;width: 100%;float: left;padding: 5px 10px;} 
    .popcontent .pop-content-list li .vux-x-icon{fill: #ff5722;float: left;} 
    .popcontent .pop-content-list li span{float: left;margin-top: -3px;margin-left: 5px;} 
    .popcontent .attribute-pop-sure{bottom: 0px; position: absolute; margin: 0; padding: 0; border-radius: 0px;} 
    .size-top .img{width: 100px; height: 100px; border-radius: 5px; overflow: hidden; padding: 10px; border: 1px solid #ccc; background-color: #fff; margin-top: -30px; float: left;} { float: left; margin-left: 30px; font-size: 14px; } 
    .demo5-item { width: 30px; height: 26px; line-height: 26px; text-align: center; border-radius: 3px; border: 1px solid #ccc; background-color: #fff; margin-right: 6px; } 
    .demo5-item-selected { border-color: #ff4a00; } 
    .vux-popup-dialog, .vux-popup { background: #fff; }
    .pop-body{padding: 0 10px;}
    .bottom-pos{position: absolute;bottom: 0px;}
    button.size-pop-btn{ width: 50%; padding: 0; margin: 0; border-radius: 0px;}
    .weui-btn + .weui-btn { margin-top: 0px; }
</style>
