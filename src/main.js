// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import validate from './validate'
import axios from 'axios'
import VueTouch from 'vue-touch'
import store from './store'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  validate,
  store,
  components: { App },
  template: '<App/>'
})
