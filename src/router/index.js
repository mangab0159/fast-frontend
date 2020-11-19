import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/patients',
    component: () => import('@/views/PatientsPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/patients/:ptname',
    component: () => import('@/views/PatientsPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/pcontents/:ptid',
    name: 'pcontent',
    component: () => import('@/views/PcontentsPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/tresult',
    name: 'tresult',
    component: () => import('@/views/TresultPage.vue'),
    meta: { auth: true },
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: { auth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증필요');
    next('/');
    return;
  }
  console.log('next', next);
  next();
});

export default router;
