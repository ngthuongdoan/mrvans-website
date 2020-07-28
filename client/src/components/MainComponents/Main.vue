<template>
  <div>
    <app-header></app-header>
    <component :is="componentId"></component>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppFooter from "./Footer.vue";
import AppHome from "./Home.vue";
import AppMenuToday from "./MenuToday.vue";
import AppMenuTomorrow from "./MenuTomorrow.vue";
import AppWhyus from "./Whyus.vue";
import AppContact from "./Contact.vue";

import { eventBus } from "../../main";

export default {
  data() {
    return {
      componentId: "app-home",
    };
  },
  created() {
    eventBus.$on("pageChanged", (name) => {
      this.componentId = name;
    });
  },
  components: {
    AppHeader,
    AppFooter,
    AppHome,
    AppMenuToday,
    AppMenuTomorrow,
    AppWhyus,
    AppContact,
  },
};
</script>

<style lang="scss">
@import "../../styles/App.scss";
</style>