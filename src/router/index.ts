/**
 * @name 路由
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/view/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    children: [
      {
        name: 'config',
        path: 'config',
        component: () => import('@/view/module/config/index.vue')
      },
      {
        name: 'works',
        path: 'works',
        component: () => import('@/view/module/works/index.vue')
      }
    ] as Array<RouteRecordRaw>
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
