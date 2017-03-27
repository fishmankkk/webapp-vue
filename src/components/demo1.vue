<template>
  <div>
    <tabbar>
      <tabbar-item>
        <x-icon type="ios-arrow-up" size="30"></x-icon>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <x-icon type="ios-arrow-up" size="30"></x-icon>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <x-icon type="ios-arrow-up" size="30"></x-icon>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <x-icon type="ios-arrow-up" size="30"></x-icon>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XIcon } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    XIcon
  }
}
</script>
