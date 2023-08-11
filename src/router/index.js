import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import brend from '../views/brend.vue';
import brendlist from '../views/brendlist.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/brend', component: brend },
  { path: '/brandlist/:brendlist', name: 'brendlist', component: brendlist, props: true },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/registracijaKiliA',
    name: 'odabirregistracije',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registracijaKiliA.vue')
  },
  {
    path: '/info', // Dodajte novu rutu za komponentu info
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue')
  },
  {
    path: '/prijaviA',
    name: 'prijaviA',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrijaviA.vue'),
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forum.vue'),
  },
  {
    path: '/odabirtipak',
    name: 'Odabirtipak',
    component: () => import(/* webpackChunkName: "about" */ '../views/odabirtipak.vue'),
  },
  {
    path: '/masnakoza',
    name: 'masnakoza',
    component: () => import(/* webpackChunkName: "about" */ '../views/masnakoza.vue'),
  },
  {
    path: '/maskezalicem',
    name: 'maskezaliceM',
    component: () => import(/* webpackChunkName: "about" */ '../views/maskezaliceM.vue'),
  },
  {
    path: '/missha',
    name: 'missha',
    component: () => import(/* webpackChunkName: "about" */ '../views/Missha.vue'),
  },
  {
    path: '/KremazaliceM',
    name: 'KremazaliceM',
    component: () => import(/* webpackChunkName: "about" */ '../views/KremazaliceM.vue'),
  },
  {
    path: '/DR',
    name: 'DR',
    component: () => import(/* webpackChunkName: "about" */ '../views/DR.vue'),
  },
  {
    path: '/suhakoza',
    name: 'suhakoza',
    component: () => import(/* webpackChunkName: "about" */ '../views/suhakoza.vue'),
  },
  {
    path: '/maskezalices',
    name: 'MaskezaliceS',
    component: () => import(/* webpackChunkName: "about" */ '../views/MaskezaliceS.vue'),
  },
  {
    path: '/LBB',
    name: 'LBB',
    component: () => import(/* webpackChunkName: "about" */ '../views/LBB.vue'),
  },
  {
    path: '/brend',
    name: 'brend',
    component: () => import(/* webpackChunkName: "about" */ '../views/brend.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
