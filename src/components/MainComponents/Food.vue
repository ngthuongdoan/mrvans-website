<template>
  <div class="food">
    <div class="food-img" :style="{ 'background-image': 'url(' + imageURL + ')' }"></div>
    <h5 class="food-name">{{ name }}</h5>
    <p class="food-price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      // required: true,
      default: "Liên hệ",
    },
  },
};
</script>