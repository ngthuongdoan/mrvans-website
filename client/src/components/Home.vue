<template>
  <div id="container">
    <section id="slogan">
      <h1>HÃY ĐỂ CHÚNG TÔI CHĂM SÓC CÁI BỤNG CỦA BẠN</h1>
      <p>Thực đơn ngon, giá hạt dẻ cho một chiếc bụng đói mềm</p>
      <button>ORDER NOW</button>
      <br />
      <!-- routerlink  -->
      <a href="#">Ngó sang menu chúng mình nhé...</a>
    </section>
    <div class="slider desktop">
      <img src="../assets/icons/arrow.png" alt id="left-arrow" />
      <div class="image-wrapper">
        <div id="image-container">
          <img src="../assets/1.jpg" alt style="width:100%" />
          <img src="../assets/2.jpg" alt style="width:100%" />
          <img src="../assets/3.jpg" alt style="width:100%" />
        </div>
      </div>
      <img src="../assets/icons/arrow.png" alt id="right-arrow" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $("#image-container").slick({
      nextArrow: "#right-arrow",
      prevArrow: "#left-arrow",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: "linear"
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/Home.scss";
</style>