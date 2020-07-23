<template>
  <div id="app">
    <app-header></app-header>
    <component :is="componentId"></component>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import AppHome from "./components/Home.vue";
import AppMenuToday from "./components/MenuToday.vue";
import AppMenuTomorrow from "./components/MenuTomorrow.vue";
import AppWhyus from "./components/Whyus.vue";
import AppContact from "./components/Contact.vue";

import { eventBus } from "./main";

export default {
  name: "App",
  data() {
    return {
      componentId: "app-home",
    };
  },
  created() {
    eventBus.$on("pageChanged", (name) => {
      this.componentId = name;
      console.log(this.componentId);
    });
  },
  components: {
    AppHeader,
    AppHome,
    AppFooter,
    AppMenuToday,
    AppMenuTomorrow,
    AppWhyus,
    AppContact,
  },
};
</script>

<style lang="scss">
@import "../static/App.scss";
</style>
