import Vue from 'vue'
import AppComponent from './App.vue'
import AttachFastClick from 'fastclick'
import APP_CONFIGS from './config/app-configs'
import PLATFORM_CONFIGS from './config/platform-configs'
import router from './router'
import './plugins'
import VueI18n from 'vue-i18n'
import langCN from './lang/cn'
import langEN from './lang/en'

import { Install } from 'vimo'
// 平台基础安装
Vue.use(Install, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router
})
// Create VueI18n instance with options
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn', // set locale
  fallbackLocale: 'cn',
  messages: {
    cn: langCN,
    en: langEN
  }
})

// fastclick init
/* eslint-disable no-new */
new AttachFastClick(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<AppComponent/>',
  mounted () {
    window.VM.platform.ready().then((data) => {
      console.log(`当前平台初始化完毕的信息: ${data}`)
    })
  },
  components: {
    AppComponent
  }
})
