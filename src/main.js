// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import store from "./store";
import router from "./router/router";

Vue.prototype.$Chartist = Chartist;

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
