import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import active2 from '@/components/active2'


import about from '@/components/About'
import test from '@/components/test'


import ActiveDrivers from '@/components/ActiveDrivers'
import UserRanking from '@/components/UserRanking'
import loading from '@/components/loading'

import search from '@/components/search'
import main from '@/components/main'





Vue.use(Router)
//array of routes that page goes to on click of button
export default new Router({
  routes: [
    
    {
      path: '/ActiveDrivers',//:name/:working',
      name: 'ActiveDrivers',
      //props: true,
      component: ActiveDrivers
    },
    {
      path: '/active2',//:name/:working',
      name: 'active2',
      //props: true,
      component: active2
    },
    {
      path: '/UserRanking',
      name: 'UserRanking',
      component: UserRanking
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
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'main',
      component: main
    }
    
    
  ]
})
