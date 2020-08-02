import Vue from "vue";
import App from "@/App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index";
axios.defaults.baseURL = `https://mrvans.herokuapp.com/api`;
Vue.use(VueAxios, axios);

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
