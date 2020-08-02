import Vue from "vue";
import App from "@/App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
  page_id: "109226167490414", //  change 'null' to your Facebook Page ID,
  theme_color: '#0084ff', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

axios.defaults.baseURL = `https://mrvans.herokuapp.com/api`;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
export const eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
