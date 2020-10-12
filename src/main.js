import Vue from "vue";
import App from "@/App.vue";
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import VTooltip from 'v-tooltip'

import VueAxios from "vue-axios";
import router from "./router/index";
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(VTooltip)

// Install BootstrapVue
axios.defaults.baseURL = `https://mrvans2020.herokuapp.com/api`;
// axios.defaults.baseURL = `http://192.168.10.105:8081/api`;
Vue.config.productionTip = false;
export const eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  created() {
    return (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
}).$mount("#app");
