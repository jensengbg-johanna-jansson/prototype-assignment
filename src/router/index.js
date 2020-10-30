import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import Login from '../views/Login.vue'
// import MobileStartPage from '../views/MobileStartPage.vue'


const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  // {
  //   path: '/mobile',
  //   name: 'MobileStartPage',
  //   component: MobileStartPage
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
