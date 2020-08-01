<template>
  <div class="custom-scrollbar contact">
    <div v-for="(item, index) in items" :key="index" :class="'card ' + item.even">
      <h1>{{ item.title }}</h1>
      <p v-if="item.title !== 'Liên hệ'">{{ item.content }}</p>
      <ul v-else>
        <li v-for="c in item.content" :key="c">{{c}}</li>
      </ul>
    </div>
    <div class="card maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.203631968931!2d106.64810831446808!3d10.795710261790292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a49214b1d%3A0xfe44622b5415c12c!2zMjM2LCAyNjAvMyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUGjGsOG7nW5nIDEyLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595913160656!5m2!1svi!2s"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
          title: "Giới thiệu",
          content:
            "Công ty TNHH Green Gro là một công ty chuyên cung cấp và chế biến các mặt hàng thực phẩm, Xúc xích tươi, cơm trưa văn phòng. Với khẩu hiệu “Thấu hiểu từng bữa cơm”, chúng tôi với mong muốn mang đến cho mọi nhà những thực phẩm sạch, tươi ngon và những bữa cơm chất lượng đến với mọi người.",
        },
        {
          even: "even",
          title: "Tầm nhìn",
          content:
            "Trong 5 năm tới, Mr. Vans sẽ trở thành thương hiệu hàng đầu cung cấp các loại thực phẩm tươi ngon đến với mọi nhà, cửa hàng, nhà hàng. Và đặc biệt sẽ đưa các sản phẩm đặc biệt của Việt Nam ra thị trường nước ngoài.",
        },
        {
          even: "",
          title: "Sứ mệnh",
          content:
            "Đối với người tiêu dùng: Mr. Vans xác định cho mình sứ mệnh trở thành người bạn đồng hành “Thấu hiểu từng bữa cơm” của các bạn, dịch vụ chúng tôi cũng cấp giúp khách hàng được sử dụng những thực phẩm tươi ngon, đảm bảo chất lượng, đặc biệt tiết kiệm thời gian và giảm thiểu chi phí.",
        },
        {
          even: "even",
          title: "Liên hệ",
          content: [
            "Địa chỉ: 236/3 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Hồ Chí Minh",
            "Hotline: 05 646464 99",
            "Email: phumrvans@gmail.com",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/Contact.scss";
</style>