<template>
  <div class="hamburger-content">
    <ul>
      <li>
        <a href="#home">TRANG CHỦ</a>
      </li>
      <li class="dropdown">MENU</li>
      <ul class="dropdowncontent">
        <li>
          <a href="#today-menu">THỰC ĐƠN HÔM NAY</a>
        </li>
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
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hamburger-content {
  background-color: white;
  z-index: 100;
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