<template>
  <div id="app">
    <app-header></app-header>
    <app-home></app-home>
  </div>
</template>


<script>
import AppHeader from "./components/Header.vue";
import AppHome from "./components/Home.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppHome
  }
};
</script>

<style lang="scss">
@import "../static/App.scss";
</style>
