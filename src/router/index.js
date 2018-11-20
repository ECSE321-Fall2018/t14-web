import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activepassengers from '@/component/ActivePassengers'
import ranking from '@/components/Ranking'
import active from '@/components/Active'
import about from '@/components/About'
import test from '@/components/test'



Vue.use(Router)
//array of routes that page goes to on click of button
export default new Router({
  routes: [
    
    {
      path: '/Active',//:name/:working',
      name: 'active',
      //props: true,
      component: active
    },
    {
      path: '/ActivePassengers',//:name/:working',
      name: 'activepassengers',
      //props: true,
      component: activepassengers
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
    }
    
  ]
})
