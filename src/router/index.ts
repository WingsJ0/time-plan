/**
 * @name 路由
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    children: [
      {
        name: 'config',
        path: 'config',
        component: () => import('@/views/modules/config/index.vue')
      },
      {
        name: 'works',
        path: 'works',
        component: () => import('@/views/modules/works/index.vue')
      }
    ] as Array<RouteRecordRaw>
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
