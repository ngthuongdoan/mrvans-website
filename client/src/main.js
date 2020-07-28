import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";

import Main from "./components/MainComponents/Main.vue";
import Dashboard from "./components/AdminComponents/Dashboard.vue";

axios.defaults.baseURL = `https://tankyapp.herokuapp.com`;
Vue.use(VueAxios, axios);

const routes = [
  { path: "/", component: Main },
  { path: "/admin", component: Dashboard }
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;
export const eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
