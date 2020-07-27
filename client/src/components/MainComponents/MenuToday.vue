<template>
  <div class="custom-scrollbar menu">
    <app-food v-for="food in menu" :key="food.id" :name="food.name" :price="food.price"></app-food>
  </div>
</template>

<script>
import AppFood from "./Food.vue";
export default {
  data() {
    return {
      menu: [],
    };
  },
  components: {
    AppFood,
  },
  created() {
    this.$http.get("/list").then((res) => {
      this.menu = res.data.splice(0);
      console.log(this.menu);
    });
  },
};
</script>

<style lang="scss">
@import "../../styles/Menu.scss";

</style>