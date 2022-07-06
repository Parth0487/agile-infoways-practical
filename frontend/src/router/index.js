import { authGaurd } from '@/utils/common'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

import Application from '../views/Application.vue'
import UserApplications from '../views/UserApplications.vue'

import PageNotFound from '../views/commonViews/PageNotFound.vue'

const routes = [

  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: authGaurd
  },

  {
    path: '/application',
    name: 'application',
    component: Application,
    // beforeEnter: authGaurd
  },

  {
    path: '/user-applications',
    name: 'user application',
    component: UserApplications,
    // beforeEnter: authGaurd
  },

  {
    path: "/:catchAll(.*)",
    name: 'page-not-found',
    component: PageNotFound,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
