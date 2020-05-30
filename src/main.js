import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon/iconfont.css'
import '../tools/rem'
import Mint from 'mint-ui';
Vue.config.productionTip = false
Vue.use(Mint);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
