import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Playlist from '../views/Playlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showNavBar: true },
  },
  {
    path: '/hot',
    name: 'Hot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hot" */ '../views/Hot.vue'),
    meta: { showNavBar: true },
  },
  {
    path: '/search',
    name: '/Search',
    component: Search,
    meta: { showNavBar: true },
  },
  {
    path: '/playlist',
    name: '/Playlist',
    component: Playlist,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
