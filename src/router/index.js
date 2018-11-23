import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



import about from '@/components/About'



import ActiveParticipants from '@/components/ActiveParticipants'
import UserRanking from '@/components/UserRanking'
import loading from '@/components/loading'

import search from '@/components/search'
import main from '@/components/main'






Vue.use(Router)
//array of routes that page goes to on click of button
export default new Router({
  routes: [
    
    {
      path: '/ActiveParticipants',//:name/:working',
      name: 'ActiveParticipants',
      //props: true,
      component: ActiveParticipants
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
      name: 'loading',
      component: loading
    },

    {
      path: '/main',
      name: 'main',
      component: main
    }
    
    
  ]
})
