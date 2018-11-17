import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import ranking from '@/components/Ranking'
import active from '@/components/Active'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/active/:name/:working',
      name: 'active',
      props: true,
      component: active
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    }
  ]
})
