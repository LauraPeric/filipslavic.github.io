import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '../store';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/*webpackChunkName: "login"*/ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/registracijaKiliA',
    name: 'odabirregistracije',
    component: () => import(/* webpackChunkName: "registracijaKiliA" */ '../views/registracijaKiliA.vue')
  },
  {
    path: '/info', // nova rutu za komponentu info
    name: 'Info',
    meta: {
      needsUser: true
    },
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
    meta: {
      needsUser: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Forum.vue'),
  },
  {
    path: '/odabirtipak',
    name: 'Odabirtipak',
    meta: {
      needsUser: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/odabirtipak.vue'),
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
    path: '/serumigeloviM',
    name: 'serumigeloviM',
    component: () => import(/* webpackChunkName: "about" */ '../views/serumigeloviM.vue'),
  },
  {
    path: '/MserumLBB',
    name: 'MserumLBB',
    component: () => import(/* webpackChunkName: "about" */ '../views/MserumLBB.vue'),
  },
  {
    path: '/micelM',
    name: 'micelM',
    component: () => import(/* webpackChunkName: "about" */ '../views/micelM.vue'),
  },
  {
    path: '/Ziaja',
    name: 'Ziaja',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ziaja.vue'),
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
    path: '/kremazaliceS',
    name: 'kremazaliceS',
    component: () => import(/* webpackChunkName: "about" */ '../views/kremazaliceS.vue'),
  },
  {
    path: '/Pure',
    name: 'Pure',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pure.vue'),
  },
  {
    path: '/serumigeloviS',
    name: 'serumigeloviS',
    component: () => import(/* webpackChunkName: "about" */ '../views/serumigeloviS.vue'),
  },
  {
    path: '/Ladria',
    name: 'Ladria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ladria.vue'),
  },
  {
    path: '/micelS',
    name: 'micelS',
    component: () => import(/* webpackChunkName: "about" */ '../views/micelS.vue'),
  },
  {
    path: '/balea',
    name: 'balea',
    component: () => import(/* webpackChunkName: "about" */ '../views/balea.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("stara ruta", from.name, "-->", to.name, "korisnik", store.currentUser)

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next("Login");
  }
  else {
    next();
  }
});

/*
DODATI ZA ADMINA NEKE STRANICE KOJE ON MOZE UREDITI
)*/

export default router;
