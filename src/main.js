import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import MarkDown from 'vue-markdown'
import hljs from 'highlight.js/lib/highlight'
import PreCode from '@components/PreCode'
import terminator from '@components/terminator'

hljs.configure({useBR: true});


Vue.component("pre-code", PreCode)
Vue.component("terminator", terminator)
Vue.component('markdown',MarkDown)   // => 暂未使用!!!
Vue.config.productionTip = false

// 引入样式表
import '@css/global.css'
// import '@css/bundle-BlueSky-mobile.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
