<template>
  <div class="custom-scrollbar menu">
    <h1>{{ title }}</h1>
    <div class="food-container">
      <app-food
        v-for="food in menu"
        :key="food.id"
        :name="food.name"
        :price="food.price"
        :imageURL="food.imageURL"
      ></app-food>
    </div>
  </div>
</template>

<script>
import AppFood from "./Food.vue";
export default {
  data() {
    const getToday = () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      return dd + "/" + mm + "/" + yyyy;
    };
    return {
      title: `THỰC ĐƠN NGÀY ${getToday()}`,
      menu: [],
    };
  },
  components: {
    AppFood,
  },
  created() {
    this.$http.get("/menu/today").then((res) => {
      this.menu = res.data.splice(0);
    });
  },
};
</script>

<style lang="scss">
@import "@/styles/Menu.scss";
</style>