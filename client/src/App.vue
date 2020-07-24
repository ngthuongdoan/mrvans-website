<template>
  <div id="app">
    <app-header></app-header>
    <component :is="componentId"></component>
  </div>
</template>


<script>
import AppHeader from "./components/Header.vue";
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
    AppMenuToday,
    AppMenuTomorrow,
    AppWhyus,
    AppContact,
  },
};
</script>

<style lang="scss">
@import "./styles/App.scss";
</style>
