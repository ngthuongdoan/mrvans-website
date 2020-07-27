<template>
  <div class="food">
    <img class="food-img" :src="img-link" alt />
    <h5 class="food-name">{{ name }}</h5>
    <p class="food-price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: ["img-link", "name", "price"],
};
</script>