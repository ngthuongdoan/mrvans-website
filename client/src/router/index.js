import Vue from "vue";
import Router from "vue-router";
import Main from "../components/MainComponents/Main.vue";
import Dashboard from "../components/AdminComponents/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", components: Main },
    { path: "/admin", components: Dashboard }
  ]
});
