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
    
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style lang="scss">
.zalo-chat-widget{
  top:80vh;
}
</style>

