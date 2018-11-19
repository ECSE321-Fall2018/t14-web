import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ranking from '@/components/Ranking'
import active from '@/components/Active'
import about from '@/components/About'
import test from '@/components/test'



Vue.use(Router)
//array of routes that page goes to on click of button
export default new Router({
  routes: [
    
    {
      path: '/',//:name/:working',
      name: 'active',
      //props: true,
      component: active
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/HelloWorld',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'about',
      component: about
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})