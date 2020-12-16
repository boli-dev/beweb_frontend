import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.Auth.isLoggedIn || !store.state.Auth.user) {
        next('/login');
      }
      next();
    },
  },
  {
    path: '/dashboard/users/:id',
    name: 'Edit_User',
    component: () => import('../views/Edit.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.Auth.isLoggedIn || !store.state.Auth.user) {
        next('/login');
      }
      next();
    },
  },
  {
    path: '/dashboard/users',
    name: 'Add_User',
    component: () => import('../views/Add.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.Auth.isLoggedIn || !store.state.Auth.user) {
        next('/login');
      }
      next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
