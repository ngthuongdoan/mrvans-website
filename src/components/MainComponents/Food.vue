<template>
  <div class="food">
    <div class="food-img" :style="{ 'background-image': 'url(' + imgLink + ')' }"></div>
    <h5 class="food-name">{{ name }}</h5>
    <p class="food-price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: ["imgLink", "name", "price"],
};
</script>