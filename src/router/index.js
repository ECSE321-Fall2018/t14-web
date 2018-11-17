import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Karpool from '@/components/Karpool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/app',
      name: 'Karpool',
      component: Karpool

    }
  ]
})