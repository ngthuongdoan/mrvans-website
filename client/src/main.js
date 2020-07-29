import Vue from "vue";
import App from "@/App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index";
import PaperDashboard from "./components/AdminComponents/plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

axios.defaults.baseURL = `https://mrvans.herokuapp.com/api`;
Vue.use(VueAxios, axios);

Vue.use(PaperDashboard);

Vue.config.productionTip = false;
export const eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
