<template>
  <div class="custom-scrollbar contact">
    <p>Contact</p>
    <p v-for="i in 100" :key="i">{{i}}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  position: relative;
  height: 75vh;
  width: 90vw;
  overflow: auto;
  background-color: white;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  transform: translateY(80px);
}
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6d6c6c;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
}
</style>