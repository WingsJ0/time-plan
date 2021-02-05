import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
