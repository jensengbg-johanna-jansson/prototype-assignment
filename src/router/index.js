import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import PatientStatus from "../views/PatientStatus.vue"
import Settings from "../views/Settings.vue"
import SettingsAbout from "../views/SettingsAbout.vue"
import SettingsSupport from "../views/SettingsSupport.vue"
import SettingsSecurity from "../views/SettingsSecurity.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/patient-status",
    name: "Pateint Status",
    component: PatientStatus,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/settings-about",
    name: "Settings",
    component: SettingsAbout,
  },
  {
    path: "/settings-support",
    name: "Settings",
    component: SettingsSupport,
  },
  {
    path: "/settings-security",
    name: "Settings",
    component: SettingsSecurity,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
