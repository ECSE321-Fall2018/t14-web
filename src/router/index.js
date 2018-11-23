import Vue from 'vue'
import Router from 'vue-router'








import ActiveParticipants from '@/components/ActiveParticipants'
import UserRanking from '@/components/UserRanking'
import loading from '@/components/loading'

import main from '@/components/main'

import carou from '@/components/carou'






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
      path: '/loading',
      name: 'loading',
      component: loading
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
    },
    {
      path: '/carou',
      name: 'carou',
      component: carou
    }
    
    
  ]
})
