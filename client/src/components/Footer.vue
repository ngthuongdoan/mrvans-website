<template>
  <footer>
    <div class="main-info">
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, labore!</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333333;
  color: white;
  font-size: 2vh;
  justify-items: left;
}

.main-info {
  width: 100%;
  margin: 10px;
  p {
   font-size: 1vh;
  }
}
</style>