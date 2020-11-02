import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addtravel',
    name: 'AddTravel',
    component: () => import('../views/AddTravel.vue')
  },
  {
    path: '/travelhistory',
    name: 'TravelHistory',
    component: () => import('../views/TravelHistory.vue')
  },
  {
    path: '/travelhistoryexpanded',
    name: 'TravelHistoryExpanded',
    component: () => import('../views/TravelHistoryExpanded.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
