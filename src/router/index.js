import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {// route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "sandbox" */ '../views/Contact.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "sandbox" */ '../views/Recipes.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
