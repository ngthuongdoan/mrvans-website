import Vue from 'vue';
import VueRouter from "vue-router";
import Main from "../components/MainComponents/Main.vue";
import Dashboard from "../components/AdminComponents/Dashboard.vue";

const routes = [
  { path: "/", components: Main },
  { path: "/admin", components: Dashboard }
];

export default new VueRouter({
  mode: "history",
  routes
});
