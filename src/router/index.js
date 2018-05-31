import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/:reg',
      name: 'Details',
      component: Details
    }
  ]
})
