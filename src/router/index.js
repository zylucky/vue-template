import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'share',
    component: () => import('../views/share/share.vue')
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/share/share.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
