import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTravel from '../views/AddTravel.vue'
import TravelHistory from '../views/TravelHistory.vue'
import TravelHistoryExpanded from '../views/TravelHistoryExpanded.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
