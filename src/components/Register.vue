<template>
  <div>
    <x-header :left-options="{backText: ''}">注册</x-header>
    <div class="con1">
         <img class="logo" src="../assets/vux_logo.png">
        <group>
          <x-input title="姓名" name="username" v-model="user" placeholder="请输入姓名" is-type="china-name"></x-input>
          <x-input title="手机号码" name="mobile" v-model="phonenum" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
          <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" v-model="email" is-type="email"></x-input>
        </group>
        <group>
           <popup-picker v-if="!switch6" title="性别" :data="sexList" v-model="sex"></popup-picker>
            <datetime @on-change="changeBrithdate" title="出生日期" v-model="date"></datetime>
            <x-address title="地区" v-model="addvalue" raw-value :list="addressData" value-text-align="right"></x-address>
         </group>
        <group>
          <x-input title="密码" type="password" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
          <x-input title="确定密码" v-model="password2" type="password" placeholder="" :equal-with="password"></x-input>
        </group>
        
        <group>
          <x-input title="验证码" class="weui-cell_vcode"  v-model="vcode">
          <img slot="right" class="weui-vcode-img"  src="http://weui.github.io/weui/images/vcode.jpg">
          </x-input>
        </group>
        <x-button type="primary" @click.native="goRegister">注册</x-button>
        <router-link to="/Login" style="float:right">我有帐号？</router-link>
        <toast v-model="show" type="warn">{{error}}</toast>
    </div>
  </div>

</template>

<script>
import { XHeader, XInput, XButton, Group, Cell, Flexbox, FlexboxItem, Divider, ToastPlugin, Toast, Datetime, PopupPicker, Picker, XAddress, ChinaAddressData } from 'vux'
export default {
  components: {
    XHeader,
    XInput,
    XButton,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Divider,
    ToastPlugin,
    Toast,
    Datetime,
    PopupPicker,
    Picker,
    XAddress
  },
  methods: {
    changeBrithdate (value) {
      console.log('change', value)
    },
    change (val) {
      console.log(val)
    },
    goRegister(){
        if(this.user==''){
            this.show=true;
            this.error="请填写姓名";
        }else if(this.phonenum==''){
             this.show=true;
            this.error="请填写号码";
        }else if(this.email==''){
             this.show=true;
            this.error="请填写邮箱";
        }else if(this.date==''){
             this.show=true;
            this.error="请填写出生日期";
        }else if(this.password==''||this.password2==''||this.password!=this.password2){
             this.show=true;
            this.error="请正确填写密码";
        }else if(this.vcode==''){
             this.show=true;
            this.error="请填写验证码";
        }else{
            this.$router.push({path: '/home'}); 
        }
    }
  },
  data () {
    return {
      user: '',
      phonenum:'',
      email:'',
      sex:['男'],
      date:'',
      addvalue: ['广东省', '广州市', '天河区'],
      password: '',
      password2: '',
      vcode:'',
      show:false,
      switch6: false,
      error:'',
      sexList: [["男","女"]],     
      addressData: ChinaAddressData
      
    }
  }
}
</script>

<style>
.con1 {
  text-align: center;
}
</style>
