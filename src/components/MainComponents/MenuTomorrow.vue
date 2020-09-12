<template>
  <div class="custom-scrollbar menu">
    <h1>{{ title }}</h1>
    <app-food
      v-for="food in menu"
      :key="food.id"
      :name="food.name"
      :price="food.price"
      :image="food.image"
    ></app-food>
  </div>
</template>

<script>
import AppFood from "./Food.vue";
export default {
  data() {
    const getTomorrow = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const weekday = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy",
      ];
      return weekday[tomorrow.getDay()];
    };
    return {
      title: `THỰC ĐƠN ${getTomorrow().toUpperCase()}`,
      menu: [],
    };
  },
  components: {
    AppFood,
  },
  created() {
    this.$http.get("/menu/tomorrow").then((res) => {
      this.menu = res.data.splice(0);
    });
  },
};
</script>

<style lang="scss">
@import "@/styles/Menu.scss";
</style>