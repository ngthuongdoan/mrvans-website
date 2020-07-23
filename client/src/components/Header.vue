<template>
  <div id="header">
    <img @click="componentName='app-home'" id="logo" src="../assets/logo.svg" alt />
    <nav class="desktop">
      <li @click="componentName='app-home'">
        <a >TRANG CHỦ</a>
      </li>
      <li class="dropdown" @mouseenter="dropdownHover=!dropdownHover" @click="componentName='app-menu-today'">MENU</li>
      <ul class="dropdowncontent" v-if="dropdownHover" @mouseleave="dropdownHover=!dropdownHover">
        <li @click="componentName='app-menu-today'">
          <a>THỰC ĐƠN HÔM NAY</a>
        </li>
        <br />
        <li @click="componentName='app-menu-tomorrow'">
          <a>THỰC ĐƠN NGÀY MAI</a>
        </li>
      </ul>
      <li @click="componentName='app-whyus'">
        <a>VÌ SAO CHỌN CHÚNG TÔI</a>
      </li>
      <li @click="componentName='app-contact'">
        <a>LIÊN HỆ</a>
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
      <app-navbar style="z-index:1000" v-if="hamburgerClicked"></app-navbar>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./Navbar.vue";
import { eventBus } from "../main";
export default {
  data() {
    return {
      hamburgerClicked: false,
      dropdownHover: false,
      componentName: "app-home",
    };
  },
  watch: {
    componentName(){
      eventBus.$emit("pageChanged", this.componentName);
    }
  },
  components: {
    AppNavbar
  },
};
</script>

<style lang="scss" scoped >
@import "../../static/Header.scss";
</style>