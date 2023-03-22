import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/tenders',
    name: 'TendersView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TendersView.vue')
  },
  {
    path: '/partners',
    name: 'PartnersView',
    component: () => import(/* webpackChunkName: "about" */ '../views/PartnersView.vue')
  },
  {
      path: '/pressCenter',
      name: 'PressCenterView',
      component: () => import(/* webpackChunkName: "about" */ '../views/PressCenterView.vue')
  },
  {
      path: '/career',
      name: 'CareerView',
      component: () => import(/* webpackChunkName: "about" */ '../views/CareerView.vue')
  },
  {
      path: '/contacts',
      name: 'ContactsView',
      component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
