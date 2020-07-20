<template>
  <div id="container">
    <section id="slogan">
      <h1>HÃY ĐỂ CHÚNG TÔI CHĂM SÓC CÁI BỤNG CỦA BẠN</h1>
      <p>Thực đơn ngon, giá hạt dẻ cho một chiếc bụng đói mềm</p>
      <button>ORDER NOW</button>
      <br />
      <!-- routerlink  -->
      <a>Ngó sang menu chúng mình nhé...</a>
    </section>
    <div class="slideshow-container"></div>
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
  </div>
</template>

<script>
export default {  
};
</script>

<style lang="scss" scoped>
@import "../../static/Home.scss";
</style>