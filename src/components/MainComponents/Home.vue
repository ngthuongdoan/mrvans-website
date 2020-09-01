<template>
  <div id="container">
    <section id="slogan">
      <h1>Cơm ngon không khó, Khi có <span>Mr. Vans</span></h1>
      <p>Thực đơn ngon, giá hạt dẻ cho một chiếc bụng đói mềm</p>
      <button onclick="window.open('https://www.facebook.com/','_blank')">ĐẶT MÓN NGAY</button>
      <br />
      <!-- routerlink  -->
      <a @click="componentName='app-menu-today'">Ngó sang menu chúng mình nhé...</a>
    </section>
    <div class="slider desktop">
      <img src="@/assets/icons/arrow.png" alt id="left-arrow" />
      <div class="image-wrapper">
        <div id="image-container">
          <img src="@/assets/1.jpg" alt style="width:100%" />
          <img src="@/assets/2.jpg" alt style="width:100%" />
          <img src="@/assets/3.jpg" alt style="width:100%" />
        </div>
      </div>
      <img src="@/assets/icons/arrow.png" alt id="right-arrow" />
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  data() {
    return {
      componentName: "app-home",
      link: "https://www.facebook.com/",
    };
  },
  watch: {
    componentName() {
      // eslint-disable-next-line
      eventBus.$emit("pageChanged", this.componentName);
    },
  },
  mounted() {
    // eslint-disable-next-line
    $("#image-container").slick({
      nextArrow: "#right-arrow",
      prevArrow: "#left-arrow",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: "linear",
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/Home.scss";
</style>