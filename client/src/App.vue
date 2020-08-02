<template>
  <div>
    <router-view></router-view>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
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

