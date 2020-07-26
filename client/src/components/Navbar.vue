<template>
  <div class="hamburger-content">
    <ul>
      <li @click="componentName='app-home'">
        <a>TRANG CHỦ</a>
      </li>
      <li @click="componentName='app-menu-today'" class="dropdown">THỰC ĐƠN</li>
      <ul class="dropdown-content">
        <li @click="componentName='app-menu-today'">
          <a>THỰC ĐƠN HÔM NAY</a>
        </li>
        <li @click="componentName='app-menu-tomorrow'">
          <a>THỰC ĐƠN NGÀY MAI</a>
        </li>
      </ul>
      <li
        class="dropdown"
        @click="componentName='app-product'"
      >SẢN PHẨM</li>
      <ul
        class="dropdown-content"
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
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      componentName: "app-home",
    };
  },
  props:['products'],
  watch: {
    componentName() {
      eventBus.$emit("pageChanged", this.componentName);
    },
  },
};
</script>

<style lang="scss">
.hamburger-content {
  background-color: white;
  z-index: 100 !important;
  position: fixed;
  right: 0;
  overflow: auto;
  ul {
    list-style: none;
    li {
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      padding: 20px;
      &:hover {
        background-color: #ffd110;
      }
      a {
        text-decoration: none;
        color: black;
        display: block;
      }
    }
  }
  .dropdown-content {
    margin-left: 20px;
    font-size: 16px;
  }
}
@media screen and (max-height: 520px) {
  .hamburger-content {
    height: 70vh;
  }
}
</style>