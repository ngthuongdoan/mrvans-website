<template>
  <div id="header">
    <img @click="componentName='app-home'" id="logo" src="@/assets/logo.svg" alt />
    <nav class="desktop">
      <li @click="componentName='app-home'">
        <a>TRANG CHỦ</a>
      </li>
      <li
        class="dropdown"
        @mouseenter="menuHover = true"
        @mouseleave="menuHover = false"
        @click="componentName='app-menu-today'"
      >MENU</li>
      <ul
        class="dropdown-content"
        v-if="turnOnMenuHover"
        @mouseenter="menuChildHover = true"
        @mouseleave="menuChildHover = false"
      >
        <li @click="componentName='app-menu-today'">
          <a>THỰC ĐƠN HÔM NAY</a>
        </li>
        <br />
        <li @click="componentName='app-menu-tomorrow'">
          <a>THỰC ĐƠN NGÀY MAI</a>
        </li>
      </ul>
      <li
        class="dropdown"
        id="product-dropdown"
        @mouseenter="productHover=true"
        @mouseleave="productHover = false"
        @click="componentName='app-product'"
      >SẢN PHẨM</li>
      <ul
        class="dropdown-content"
        id="product-content"
        v-if="turnOnProductHover"
        @mouseenter="productChildHover=true"
        @mouseleave="productChildHover = false"
      >
        <li
          v-for="product in products"
          :key="product.id"
          @click="componentName=`app-product-${product.id}`"
        >
          <a>{{ product.name }}</a>
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
        <img src="@/assets/icons/facebook.png" alt="" title="0564646499">
      </li>
      <li>
        <img src="@/assets/icons/zalo.png" alt="" title="0564646499">
      </li>
      <li>
        <img src="@/assets/icons/phone.png" alt="0564646499" title="0564646499">
      </li>
    </ul>
    <div class="mobile hamburger-wrapper">
      <ul class="hamburger" @click="hamburgerClicked=!hamburgerClicked">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <app-navbar style="z-index:1000" v-if="hamburgerClicked" :products="products"></app-navbar>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./Navbar.vue";
import { eventBus } from "@/main";
export default {
  data() {
    return {
      hamburgerClicked: false,
      menuHover: false,
      menuChildHover: false,
      productHover: false,
      productChildHover: false,
      componentName: "app-home",
      products: [],
    };
  },
  methods: {},
  computed: {
    turnOnMenuHover() {
      return !((this.menuHover === false) & (this.menuChildHover === false));
    },
    turnOnProductHover() {
      return !(
        (this.productHover === false) &
        (this.productChildHover === false)
      );
    },
  },
  watch: {
    componentName() {
      eventBus.$emit("pageChanged", this.componentName);
    },
  },
  components: {
    AppNavbar,
  },
  created() {
    eventBus.$on("closeSidebar", () => {
      this.hamburgerClicked = false;
    });
    this.$http.get("/products").then((response) => {
      if (response.data.length !== 0) this.products = response.data.splice(0);
    });
  },
};
</script>

<style lang="scss" scoped >
@import "@/styles/Header.scss";
</style>