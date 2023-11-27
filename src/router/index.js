import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Forget from '../views/Forget'
import Admin from '../components/Admin'
import NotFound from '../views/NotFound'
import Redact from '../views/Redact'
import Feed from '../views/Feed'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      alias: '/login'
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/redact',
      name: 'redact',
      component: Redact
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
