<template>
  <div class="custom-scrollbar menu-admin">
    <div class="food-container">
      <Food
        class="food"
        v-for="food in menu"
        :key="food.id"
        :name="food.name"
        :price="food.price"
        :imgLink="food.imageURL"
        @click.native="updateFood(food)"
      ></Food>
    </div>
  </div>
</template>

<script>
import Food from "@/components/MainComponents/Food";
export default {
  data() {
    return {
      menu: [],
    };
  },
  methods: {
    updateFood(food) {
      this.$emit("update-food", food);
    },
  },
  components: {
    Food,
  },
  created() {
    this.$http.get("/menu").then((res) => {
      this.menu = res.data.splice(0);
    });
  },
};
</script>

<style lang="scss">
@import "@/styles/Menu.scss";
</style>