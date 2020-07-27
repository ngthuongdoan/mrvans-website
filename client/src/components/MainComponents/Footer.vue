<template>
  <footer>
    <address>
      <h4>Địa chỉ: 236/3 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Hồ Chí Minh</h4>
      <p id="phone">Hotline: 05 646464 99</p>
      <p id="email">
        Email:
        <a href="mailto:phumrvans@gmail.com">phumrvans@gmail.com</a>
      </p>
    </address>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  width: 100%;
  height: 10vh;
  background-color: #333333;
  color: white;
  font-size: 2vh;
  position: fixed;
  bottom: 0;
}
address {
  width: 100%;
  p,
  h4 {
    font-size: 1.5vh;
    margin-left: 10px;
    margin-top: 5px;
  }
}
#email {
  a {
    font-style: italic;
    color: white;
  }
}
</style>