import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import active2 from '@/components/active2'
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
      path: '/active2',//:name/:working',
      name: 'active2',
      //props: true,
      component: active2
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
