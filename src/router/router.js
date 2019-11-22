import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes,
    linkExactActiveClass: "nav-item active"
  });

router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/login') {
      if (!store.state.token) {
        next('/login');
      }
    }
    if (to.fullPath === '/login') {
      if (store.state.accessToken) {
        next('/home');
      }
    }
    next();
  });
  
export default router;