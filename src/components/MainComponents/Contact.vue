<template>
  <div class="custom-scrollbar contact">
    <div v-for="(item, index) in items" :key="index" :class="'card ' + item.even">
      <h1>{{ item.title }}</h1>
      <div v-if="item.title == 'Giới thiệu'" style="margin-bottom:10vh">
        <p v-html="item.content.header"></p>
        <br />
        <ul style="margin-left:5vh">
          <li v-for="(paragraph, index) in item.content.paragraphs" :key="paragraph.name">
            <h3 style="margin: 2vh auto">{{ index+1 }}. {{ paragraph.name }}:</h3>
            <p
              style="margin-left:5vh"
              v-for="(text, index) in paragraph.texts"
              :key="index"
              v-html="text"
            ></p>
          </li>
        </ul>
        <br />
        <p v-html="item.content.footer"></p>
      </div>
      <ul v-else-if="item.title == 'Liên hệ'">
        <li v-for="c in item.content" :key="c">{{ c }}</li>
      </ul>
      <p v-else>{{ item.content }}</p>
    </div>
    <div class="card maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.193223064392!2d106.6490262143172!3d10.79650826177612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a3d63fa47%3A0x541a9f5d5b576f9b!2zMjM2LzMgSOG6vW0gMjM2IE5ndXnhu4VuIFRow6FpIELDrG5oLCBQaMaw4budbmcgMTIsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1599879416784!5m2!1sen!2s"
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
          content: {
            header:
              "“Con đường ngắn nhất để chạm đến trái tim là … đi qua dạ dày”. Chúng tôi yêu sức khỏe của mình và tin chắc rằng bạn cũng thế. Để có 1 trái tim khỏe mạnh thì việc cho bao tử tiếp nhận những thực phẩm an toàn, chất lượng là cần thiết. <b>Công ty TNHH Green Gro</b> ra đời với tiêu chí như thế:",
            footer:
              "Chúng tôi hiểu khách hàng của mình cần gì và luôn mong muốn đem lại giá trị tốt nhất cho khách hàng. Đó cũng chính là khẩu hiệu hàng đầu của công ty <b>“Thấu hiểu từng bữa cơm”</b>",
            paragraphs: [
              {
                name: "Chuyên cung cấp nguyên liệu, thực phẩm tươi sạch",
                texts: [
                  "<b>Nấm bào ngư xám/ Nấm mối đen:</b> Trại nấm chính chủ của gia đình, sản xuất theo công nghệ thông minh kép kín, an toàn vệ sinh. Từng sản phẩm luôn được lựa chọn kỹ lưỡng trao đến tay người tiêu dùng.",
                  "<b>Xúc xích tươi:</b> Nếu bạn là tín đồ của xúc xích nhưng chẳng thể tìm ra nơi sản xuất an toàn vệ sinh thực phẩm tại khu vực Thành Phố Hồ Chí Minh hay xa hơn là khắp 63 Tỉnh, Thành Phố còn lại của Việt Nam ? Đừng lo lắng <b>XÚC XÍCH MR. VANS</b> hứa hẹn 1 cực phẩm chạm thẳng đến con tim kể cả những người khó tính",
                ],
              },
              {
                name: "Cơm trưa văn phòng",
                texts: [
                  "Từ những nguyên liệu tươi ngon, giá thành hợp lý, bạn không phải nghĩ “TRƯA NAY ĂN GÌ?”. Hãy để Mr.Vans giao tận nơi, phục vụ tận chổ, không những ăn ngon mà còn nhiều khuyến mãi cho khách hàng thân thiết.",
                ],
              },
            ],
          },
        },
        {
          even: "even",
          title: "Tầm nhìn",
          content: "",
        },
        {
          even: "",
          title: "Sứ mệnh",
          content:
            "Bằng chính sự tận tâm và trách nhiệm của mình, Mr.Vans sẽ luôn đồng hành thấu hiểu khách hàng của mình như những người bạn. Mr.Vans cam kết sẽ mang đến những sản phẩm chất lượng tốt, có giá trị dinh dưỡng cao cũng như làm khách hàng hài lòng về dịch vụ, giá cả, đóng góp một phần nào đó nâng cao sức khỏe của người tiêu dùng.",
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

<style lang="scss" scoped>
@import "@/styles/Contact.scss";
</style>
