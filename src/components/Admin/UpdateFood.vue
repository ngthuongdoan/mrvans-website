<template>
  <div>
    <div style="width:100%;height:100vh;" v-if="!loaded">
      <img
        style="position:relative; top:50%; left 75%; transform:translate(100%,-50%);"
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
      />
    </div>
    <div class="custom-scrollbar menu-admin" v-else>
      <h1>Sửa món</h1>
      <div class="food-container">
        <Food
          class="food"
          v-for="food in menu"
          :key="food.id"
          :name="food.name"
          :price="food.price"
          :description="food.description"
          :image="food.image"
          @click.native="updateFood(food)"
        ></Food>
      </div>
    </div>
  </div>
</template>

<script>
import Food from "@/components/MainComponents/Food";
export default {
  data() {
    return {
      menu: [],
      loaded: false,
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
    setTimeout(() => {
      this.$http.get("/menu").then((res) => {
        this.menu = res.data.splice(0);
        this.loaded = true;
      });
    }, 1000);
  },
};
</script>

<style lang="scss">
@import "@/styles/Menu.scss";
</style>