import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
