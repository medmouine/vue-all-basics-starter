// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
// router setup
import routes from "./routes/routes";
// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";
// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import VueI18n from "vue-i18n";
import messages from "./locale/locales";
import FlagIcon from 'vue-flag-icon'

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueI18n);
Vue.use(FlagIcon);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "fr", // set locale
  messages: messages // set locale messages
});

// configure router
const router = new VueRouter({
  mode: "history",
  routes: routes(i18n), // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  i18n,
  data: {
    Chartist: Chartist
  }
})
