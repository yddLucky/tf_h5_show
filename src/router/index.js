import Vue from 'vue'
import Router from 'vue-router'
import detail from 'components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      component: detail
    }
  ],
  // mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
