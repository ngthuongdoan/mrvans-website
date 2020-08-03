<template>
  <div>
    <router-view></router-view>
    <div
      class="zalo-chat-widget"
      data-oaid="3227002521959550891"
      data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="0"
      data-width="350"
      data-height="420"
    ></div>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="109226167490414"
      theme_color="#0084ff"
    ></div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v7.0",
      });
    };
  },
};
</script>

<style lang="scss">
.zalo-chat-widget{
  top:80vh;
}
</style>

