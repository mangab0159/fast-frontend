import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/patients',
    component: () => import('@/views/PatientsPage.vue'),
  },
  {
    path: '/patients/:ptname',
    component: () => import('@/views/PatientsPage.vue'),
  },
  {
    path: '/pcontents/:ptid',
    name: 'pcontent',
    component: () => import('@/views/PcontentsPage.vue'),
  },
  {
    path: '/tresult',
    name: 'tresult',
    component: () => import('@/views/TresultPage.vue'),
  },
  {
    path: '/worklists',
    component: () => import('@/views/WorklistsPage.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
