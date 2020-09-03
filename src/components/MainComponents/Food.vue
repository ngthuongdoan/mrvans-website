<template>
  <div class="food">
    <div class="food-img" :style="{ 'background-image': 'url(' + imageURL + ')' }"></div>
    <div class="food-detail">
      <h5 class="food-name">{{ name }}</h5>
      <p class="food-price">{{ price | changePrice }}</p>
      <p class="food-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    changePrice(value) {
      if(value==="Liên hệ") return value;
      return (+value).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
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
    description: {
      type: String,
      required: false,
    },
  },
};
</script>