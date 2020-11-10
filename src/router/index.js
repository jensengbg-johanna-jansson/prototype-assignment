import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import Login from '../views/Login.vue'
import AddTravel from '../views/AddTravel.vue'
import TravelHistory from '../views/TravelHistory.vue'
import TravelHistoryExpanded from '../views/TravelHistoryExpanded.vue'
import PatientStatus from '../views/PatientStatus.vue'
import Pickup from '../views/Pickup.vue'
import Dropoff from '../views/Dropoff.vue'
import Settings from '../views/Settings.vue'
import SettingsAbout from "../views/SettingsAbout.vue"
import SettingsSupport from "../views/SettingsSupport.vue"
import SettingsSecurity from "../views/SettingsSecurity.vue"
import Phonecall from "@/views/Phonecall.vue"
import NewPatient from '../views/NewPatient.vue'
import FirstAid from '../views/FirstAid.vue'
import Heatstroke from '../views/Heatstroke.vue'
import LoginActivityDesktop from '../components/LoginActivityDesktop.vue'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
    path: "/pickup",
    name: "Pickup",
    component: Pickup,
  },
  {
    path: "/dropoff",
    name: "Dropoff",
    component: Dropoff,
  },
  {
    path: "/patient-status",
    name: "PatientStatus",
    component: PatientStatus
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/settings-about",
    name: "Settings About",
    component: SettingsAbout,
  },
  {
    path: "/settings-support",
    name: "Settings Support",
    component: SettingsSupport,
  },
  {
    path: "/settings-security",
    name: "Settings Security",
    component: SettingsSecurity,
  },
  {
    path: "/phonecall",
    name: "Phonecall",
    component: Phonecall,
  },
  {
    path: "/new-patient",
    name: "NewPatient",
    component: NewPatient
  },
  {
    path: "/firstaid",
    name: "FirstAid",
    component: FirstAid
  },
  {
    path: "/heatstroke",
    name: "Heatstroke",
    component: Heatstroke
  },
  {
    path: "/loginactivity",
    name: "LoginActivityDesktop",
    component: LoginActivityDesktop
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router