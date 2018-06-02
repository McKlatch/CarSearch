import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // these 2 views make up the entire SPA experience
  routes: [
    {
      // welcome/search/list page
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      // specific vehicle page
      path: '/:reg', // for the registration of the vehicle (dynamic)
      name: 'Details',
      component: Details
    }
  ]
})
