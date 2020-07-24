<template>
  <div class="hamburger-content">
    <ul>
      <li @click="componentName='app-home'">
        <a>TRANG CHỦ</a>
      </li>
      <li @click="componentName='app-menu-today'" class="dropdown">MENU</li>
      <ul class="dropdowncontent">
        <li @click="componentName='app-menu-today'">
          <a>THỰC ĐƠN HÔM NAY</a>
        </li>
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
  watch: {
    componentName(){
      eventBus.$emit("pageChanged", this.componentName);
    }
  },
};
</script>

<style lang="scss">
.hamburger-content {
  background-color: white;
  z-index: 100 !important;
  position: fixed;
  right: 0;
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
  .dropdowncontent{
      margin-left: 20px;
      font-size: 16px;
  }
}
</style>