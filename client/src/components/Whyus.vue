<template>
  <div class="custom-scrollbar whyus">
    <div class="customer-comment"></div>
    <div class="introduction"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.whyus {
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 75vh;
  width: 90vw;
  top: 80px;
  .customer-comment{
    width: 100%;
    background-color: black;
  }
  .introduction {
    background-color: white;
    border: none;
    width: 100%;
  }
}
@media screen and (max-width: 770px) {
  .whyus{
    grid-template-columns: 1fr;
  }
    .customer-comment{
      display: none;
  }
}
</style>