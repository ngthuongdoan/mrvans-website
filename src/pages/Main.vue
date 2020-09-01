<template>
  <div>
    <app-header></app-header>
    <transition name="component-fade" mode="out-in">
      <component :is="componentId"></component>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/MainComponents/Header.vue";
import AppFooter from "@/components/MainComponents/Footer.vue";
import AppHome from "@/components/MainComponents/Home.vue";
import AppMenuToday from "@/components/MainComponents/MenuToday.vue";
import AppMenuTomorrow from "@/components/MainComponents/MenuTomorrow.vue";
import AppWhyus from "@/components/MainComponents/Whyus.vue";
import AppContact from "@/components/MainComponents/Contact.vue";

import { eventBus } from "@/main";

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
@import "@/styles/App.scss";
.component-fade-enter-active, .component-fade-leave-active {
  transition: all 1s ease;
}
.component-fade-enter, .component-fade-leave{
  opacity: 0;
}
</style>