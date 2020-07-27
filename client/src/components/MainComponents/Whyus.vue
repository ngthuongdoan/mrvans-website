<template>
  <div class="custom-scrollbar whyus">
    <div v-for="(item, index) in items" :key="index" :class="'card ' + item.even">
      <h1>{{ item.title }}</h1>
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          even: "",
          title: "Chúng tôi đặt tiêu chí phục vụ khách hàng lên hàng đầu",
          content:
            "Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng thành công của chúng tôi nằm trong những giá trị mà chúng tôi đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi.",
        },
        {
          even: "even",
          title: "Chúng tôi đặt tiêu chí phục vụ khách hàng lên hàng đầu",
          content:
            "Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng thành công của chúng tôi nằm trong những giá trị mà chúng tôi đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi.",
        },
        {
          even: "",
          title: "Chúng tôi đặt tiêu chí phục vụ khách hàng lên hàng đầu",
          content:
            "Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng thành công của chúng tôi nằm trong những giá trị mà chúng tôi đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi.",
        },
        {
          even: "even",
          title: "Chúng tôi đặt tiêu chí phục vụ khách hàng lên hàng đầu",
          content:
            "Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng thành công của chúng tôi nằm trong những giá trị mà chúng tôi đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi.",
        },
      ],
    };
  },
  created() {},
};
</script>

<style lang="scss">
@import "../../styles/Whyus.scss";
</style>