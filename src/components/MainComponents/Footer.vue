<template>
  <footer>
    <address>
      <p>Địa chỉ: 236/3 Hẽm 236 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Tp. Hồ Chí Minh</p>
      <p >Đặt món ngay: 05 646464 99</p>
      <p >Hotline CSKH: 03 6868 0611</p>
      <p id="email">
        Email:
        <a href="mailto:phumrvans@gmail.com">phumrvans@gmail.com</a>
      </p>
    </address>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="109226167490414"
      theme_color="#0084ff"
    ></div>
  </footer>
</template>
<script>
export default {
  mounted() {
    window.fbAsyncInit = function () {
      // eslint-disable-next-line
      FB.init({
        xfbml: true,
        version: "v7.0",
      });
    };
  },
}
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
  margin-top: 5px;
  width: 100%;
  line-height: inherit;
  p{
    font-size: 1.5vh;
    margin-left: 10px;
    margin-bottom: 0;
  }
}
#email {
  a {
    font-style: italic;
    color: white;
  }
}
@media only screen and (max-width: 420px) {
  address{
    p{
      font-size: 9.5px;
    }
  }
}
</style>