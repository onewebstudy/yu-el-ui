/*
 * @Author: yubb
 * @Date: 2023-04-26 14:28:04
 * @LastEditTime: 2023-04-26 14:55:29
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/index.vue'
import HelloWord from '@/views/HelloWord.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home页面',
    component: Home,
  },
  {
    path: '/HelloWord',
    name: 'HelloWord',
    component: HelloWord,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
