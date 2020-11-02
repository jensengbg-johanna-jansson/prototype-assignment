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
    path: "/patient-status",
    name: "PatientStatus",
    component: PatientStatus
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
