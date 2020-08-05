<template>
  <div class="custom-scrollbar whyus">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="'card ' + item.even"
      :style='{ backgroundImage: `url("${item.backgroundImage}")` }'
    >
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
          backgroundImage: "~@/assets/whyus-1.jpg",
        },
        {
          even: "even",
          title: "Đảm bảo chất lượng",
          content:
            "Nguồn thực phẩm tươi sạch nguồn gốc rõ ràng. Thực phẩm được chọn lọc kỹ càng, cam kết không sử dụng các hoá chất làm ảnh hưởng đến sức khỏe mọi người.",
          backgroundImage: "~@/assets/whyus-2.jpg",
        },
        {
          even: "",
          title: "Hương vị Sài Gòn",
          content:
            "Món ăn được chế biến hương vị đậm đà, phù hợp với nhiều thực khách sinh sống tại Sài Gòn.",
          backgroundImage: "~@/assets/whyus-3.jpg",
        },
        {
          even: "even",
          title: "Thực đơn mới lạ mỗi ngày",
          content:
            "Thường xuyên thay đổi các món ăn từng ngày, từng tuần, từng tháng, không gây cảm giác chán ngán. Mang đến bữa trưa chất lượng, tiện lợi cho dân văn phòng.",
          backgroundImage: "~@/assets/whyus-4.jpg",
        },
        {
          even: "",
          title: "Giao hàng nhanh chóng, đúng giờ",
          content:
            "Chúng tôi với đội ngũ giao hàng chuyên nghiệp sẽ cố gắng giao món ăn đến quý khách 1 cách nhanh chóng, đúng giờ.",
          backgroundImage: "~@/assets/whyus-5.jpg",
        },
        {
          even: "even",
          title: "Phần cơm đầy đủ chất dinh dưỡng",
          content:
            "Mỗi phần cơm Green Gro có: Món mặn, món xào, canh, đồ tráng miệng, tăm và giấy lau.",
          backgroundImage: "~@/assets/whyus-6.jpg",
        },
        {
          even: "",
          title: "Luôn lắng nghe khách hàng",
          content:
            "Đội ngũ Mr. Vans luôn luôn lắng nghe những phản hồi của khách hàng để cải thiện chất lượng sản phẩm và dịch vụ ngày một tốt hơn.",
          backgroundImage: "~@/assets/whyus-7.jpg",
        },
        {
          even: "even",
          title: "Sự tin tưởng",
          content:
            "Thành công của chúng tôi là đạt được sự tin tưởng của khách hàng cũng như mối quan hệ mật thiết với khách hàng. Chúng tôi mong muốn khách hàng như những người bạn thâm giao bền vững của chúng tôi.",
          backgroundImage: "~@/assets/whyus-8.jpg",
        },
      ],
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/Whyus.scss";
</style>