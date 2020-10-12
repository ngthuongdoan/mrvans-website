<template>
  <div>
    <h1>Thêm món</h1>
    <div class="form-container">
    <form @submit.prevent="addFood">
      <div class="form-group">
        <label for="exampleFormControlInput1">Tên</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="food.name" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Ảnh:</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlInput3"
          @change="addImage"
          accept=".jpg, .png"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Giá</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
          v-model="food.price"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Miêu tả</label>
        <textarea
          class="form-control"
          id="exampleFormControlInput4"
          rows="3"
          v-model="food.description"
        ></textarea>
      </div>
      <label>Thứ:</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="2"
          v-model="food.day"
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">Thứ hai</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="3"
          v-model="food.day"
          id="defaultCheck2"
        />
        <label class="form-check-label" for="defaultCheck2">Thứ ba</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="4"
          v-model="food.day"
          id="defaultCheck3"
        />
        <label class="form-check-label" for="defaultCheck3">Thứ tư</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="5"
          v-model="food.day"
          id="defaultCheck4"
        />
        <label class="form-check-label" for="defaultCheck4">Thứ năm</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="6"
          v-model="food.day"
          id="defaultCheck5"
        />
        <label class="form-check-label" for="defaultCheck5">Thứ sáu</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="7"
          v-model="food.day"
          id="defaultCheck6"
        />
        <label class="form-check-label" for="defaultCheck6">Thứ bảy</label>
        <input
          class="form-check-input"
          type="checkbox"
          value="8"
          v-model="food.day"
          id="defaultCheck7"
        />
        <label class="form-check-label" for="defaultCheck7">Chủ nhật</label>
        <br />
        <br>
      </div>
      <input type="submit" value="Xong" class="btn btn-primary" />
      <input
        type="button"
        value="Hủy"
        class="btn btn-dark"
        style="margin-left:10px"
        @click="initFood"
      />
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: {
        name: "",
        price: 0,
        description: "",
        image: "",
        day: [],
      },
    };
  },
  methods: {
    initFood() {
      this.food.name = "";
      this.food.price = 0;
      this.food.description = "";
      this.food.image = "";
      this.food.day = [];
    },
    addImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.food.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    addFood() {
      this.$swal({
        title: "Bạn có chắc?",
        text: "Bạn sẽ không hồi phục được!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Thêm nó",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.value) {
          if (this.food.price === 0) this.food.price = "Liên hệ";
          if (this.food.image === "")
            this.food.image =
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";
          this.$http
            .post("/menu/add", this.food)
            .then(() => {
              this.$swal(
                "Đã thêm!",
                this.food.name.toUpperCase() + " đã thêm",
                "success"
              ).then(() => {
                this.initFood();
              });
            })
            .catch((err) => {
              this.$swal("Lỗi", "", "error");
              console.log(err);
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../node_modules/bootstrap/scss/bootstrap";
.form-container{
  max-height: 100vh;
  overflow: auto;
  .form-check-label{
    margin-right: 30px;
  }
}
</style>