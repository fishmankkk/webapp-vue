<template>
  <div>
    <x-header :left-options="{backText: ''}">登录</x-header>
    <div class="con">
         <img class="logo" src="../assets/vux_logo.png">
        <group>
          <x-input title="手机号码" name="mobile" v-model="user" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group>
          <x-input title="密码" type="password" v-model="password" name="password" placeholder="请输入密码" is-type="password"></x-input>
        </group>
        <x-button type="primary" @click.native="islogin">登录</x-button>
        <router-link to="/Register" style="float:right">我没有帐号？</router-link>
        <toast v-model="show4" type="warn">请填写所有信息</toast>
    </div>
  </div>

</template>

<script>
import { XHeader, XInput, XButton, Group, Cell, Flexbox, FlexboxItem, Divider, ToastPlugin, Toast } from 'vux'
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
    Toast
  },
  methods: {
    islogin () { 
        if(this.user != '' && this.password != '') { 
            this.$router.push({path: '/home'}); 
            console.log(this.user);
        }else{
            this.show4=true
        }
    }
  },
  data () {
    return {
      user: '',
      password: '',
      show4: false,
    }
  }
}
</script>

<style>
.con {
  margin-top: 80px;
  text-align: center;
}
</style>
