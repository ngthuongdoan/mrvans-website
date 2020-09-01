<template>
  <div class="custom-scrollbar menu-admin">
    <div class="food-container">
      <Food
        class="food"
        v-for="food in menu"
        :key="food.id"
        :name="food.name"
        :price="food.price"
        :imgLink="food.imageURL"
        @click.native="deleteFood(food)"
      ></Food>
    </div>
  </div>
</template>

<script>
import Food from "@/components/MainComponents/Food";
export default {
  data() {
    return {
      menu: [],
      status: false,
    };
  },
  watch: {
    status() {
      this.$forceUpdate();
    },
  },
  components: {
    Food,
  },
  methods: {
    deleteFood(food) {
      this.$swal({
        title: "Bạn có chắc?",
        text: "Bạn sẽ không hồi phục được!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa nó",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.value) {
          this.$http
            .delete("/menu/delete/" + food.id)
            .then(() => {
              this.$swal(
                "Đã xóa!",
                food.name.toUpperCase() + " đã xóa",
                "success"
              ).then(() => {
                this.$router.go();
              });
            })
            .catch((err) => {
              this.$swal("Lỗi", "", "error");
              console.log(food);
              console.log(err);
            });
        }
      });
    },
  },
  created() {
    this.$http.get("/menu").then((res) => {
      this.menu = res.data.splice(0);
    });
  },
};
</script>

<style lang="scss">
@import "@/styles/Menu.scss";
.menu-admin {
  width: fit-content;
  height: 100vh;
  transform: translateY(0);
  position: relative;
  overflow: auto;
  background-color: white;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 0;
  text-align: center;
  h1 {
    margin: 20px auto;
    color: #841818;
  }
}
.food {
  cursor: pointer;
}
</style>