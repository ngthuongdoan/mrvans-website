<template>
  <div id="header">
    <img id="logo" src="../assets/logo.svg" alt />
    <nav class="desktop">
      <li>
        <a href="#home">TRANG CHỦ</a>
      </li>
      <li class="dropdown">MENU</li>
      <ul class="dropdowncontent">
        <li>
          <a href="#today-menu">THỰC ĐƠN HÔM NAY</a>
        </li>
        <br />
        <li>
          <a href="#tomorrow-menu">THỰC ĐƠN NGÀY MAI</a>
        </li>
      </ul>
      <li>
        <a href="#whyus">VÌ SAO CHỌN CHÚNG TÔI</a>
      </li>
      <li>
        <a href="#contact">LIÊN HỆ</a>
      </li>
    </nav>
    <ul class="desktop">
      <li>
        <ion-icon name="logo-facebook"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-instagram"></ion-icon>
      </li>
      <li>
        <ion-icon name="call-outline"></ion-icon>
      </li>
    </ul>
    <div class="mobile hamburger-wrapper">
      <ul class="hamburger" @click="hamburgerClicked=!hamburgerClicked">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <app-navbar v-if="hamburgerClicked"></app-navbar>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./Navbar.vue";
export default {
  data() {
    return {
      hamburgerClicked: false
    };
  },
  components: {
    AppNavbar
  },
  mounted() {
    $(".dropdown").on("mouseover", () => {
      $(".dropdowncontent").css("display", "block");
    });
    $(".dropdown + .dropdowncontent").on("mouseleave", () => {
      $(".dropdowncontent").css("display", "none");
    });
  }
};
</script>

<style lang="scss" scoped >
@import "../../static/Header.scss";
</style>