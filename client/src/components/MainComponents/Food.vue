<template>
  <div class="food">
    <div class="food-img" :style="backgroundImg"></div>
    <h5 class="food-name">{{ name }}</h5>
    <p class="food-price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: ["imgLink", "name", "price"],
  data() {
    return {
      backgroundImg: {
        backgroundImage: `url(${imgLink})`,
      },
    };
  },
};
</script>