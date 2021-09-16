import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mybook from '../views/Mybook.vue'
import History from '../views/History.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mybook',
    name: 'Mybook',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "Mybook" */ '../views/Mybook.vue')
    component: Mybook,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
]

const router = new VueRouter({
  routes,
})

export default router;
