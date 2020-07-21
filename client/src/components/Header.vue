<template>
  <div id="header">
    <img id="logo" src="../assets/logo.svg" alt />
    <nav class="mobile">
      <li v-for="link in navLinks" :key="link">{{ link }}</li>
    </nav>
    <ul class="mobile">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: ["TRANG CHỦ", "MENU", "VÌ SAO CHỌN CHÚNG TÔI", "LIÊN HỆ"]
    };
  }
};
</script>

<style lang="scss" scoped >
@import "../../static/Header.scss";
</style>