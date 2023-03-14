import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import("@/views/home/index.vue"),
      meta: {
        showNavBar: true
      }
    },
    {
      path: '/order',
      component: () => import("@/views/order/index.vue"),
      meta: {
        showNavBar: true
      }
    },
    {
      path: '/message',
      component: () => import("@/views/message/index.vue"),
      meta: {
        showNavBar: true
      }
    },
    {
      path: '/favor',
      component: () => import("@/views/favor/index.vue"),
      meta: {
        showNavBar: true
      }
    },
    {
      path: '/city',
      component: () => import("@/views/city/index.vue")
    },
  ],
})

export default router
