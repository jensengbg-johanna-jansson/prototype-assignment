import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTravel from '../views/AddTravel.vue'
import TravelHistory from '../views/TravelHistory.vue'
import TravelHistoryExpanded from '../views/TravelHistoryExpanded.vue'
import PatientStatus from '../views/PatientStatus.vue'
import Pickup from '../views/Pickup.vue'
import Dropoff from '../views/Dropoff.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addtravel',
    name: 'AddTravel',
    component: AddTravel
  },
  {
    path: '/travelhistory',
    name: 'TravelHistory',
    component: TravelHistory
  },
  {
    path: '/travelhistoryexpanded',
    name: 'TravelHistoryExpanded',
    component: TravelHistoryExpanded
  },
  {
    path: '/pickup',
    name: 'Pickup',
    component: Pickup
  },
  {
    path: '/dropoff',
    name: 'Dropoff',
    component: Dropoff
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
    path: "/patient-status", 
    name: "Pateint Status", 
    component: PatientStatus
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
