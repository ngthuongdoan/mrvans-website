<template>
  <div class="wrapper">
    <SideBar @change-component="updateComponent"></SideBar>
    <!-- Page Content  -->
    <div id="content">
      <div class="container-fluid">
        <component :is="componentId" @update-food="showOverlay"></component>
      </div>
    </div>
    <div class="overlay" v-if="foodClick">
      <div class="container">
        <form @submit.prevent="updateFood">
          <div class="form-group">
            <label for="exampleFormControlInput1">Tên</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="food.name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput3">Link ảnh:</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput3"
              v-model="food.imageURL"
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
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="3"
              v-model="food.day"
              id="defaultCheck2"
            />
            <label class="form-check-label" for="defaultCheck2">Thứ ba</label>
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="4"
              v-model="food.day"
              id="defaultCheck3"
            />
            <label class="form-check-label" for="defaultCheck3">Thứ tư</label>
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="5"
              v-model="food.day"
              id="defaultCheck4"
            />
            <label class="form-check-label" for="defaultCheck4">Thứ năm</label>
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="6"
              v-model="food.day"
              id="defaultCheck5"
            />
            <label class="form-check-label" for="defaultCheck5">Thứ sáu</label>
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="7"
              v-model="food.day"
              id="defaultCheck6"
            />
            <label class="form-check-label" for="defaultCheck6">Thứ bảy</label>
            <br />
            <input
              class="form-check-input"
              type="checkbox"
              value="8"
              v-model="food.day"
              id="defaultCheck7"
            />
            <label class="form-check-label" for="defaultCheck7">Chủ nhật</label>
            <br />
            <br />
          </div>
          <input type="submit" value="Xong" class="btn btn-primary" />
          <button class="btn btn-dark" style="margin-left:10px" @click="turnOffOverlay">Hủy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Admin/Sidebar";
import AddFood from "@/components/Admin/AddFood";
import UpdateFood from "@/components/Admin/UpdateFood";
import DeleteFood from "@/components/Admin/DeleteFood";
export default {
  data() {
    return {
      componentId: "AddFood",
      foodClick: false,
      food: {},
    };
  },
  methods: {
    updateComponent(value) {
      this.componentId = value;
    },
    showOverlay(event) {
      this.foodClick = true;
      this.food = event;
    },
    turnOffOverlay() {
      this.foodClick = false;
    },
    updateFood() {
      // eslint-disable-next-line
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
          this.$http
            .put("/menu/update/" + this.food.id, this.food)
            .then(() => {
              this.$swal(
                "Đã sửa!",
                this.food.name.toUpperCase() + " đã sửa",
                "success"
              ).then(() => {
                this.turnOffOverlay();
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
  components: {
    SideBar,
    AddFood,
    UpdateFood,
    DeleteFood,
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/bootstrap/scss/bootstrap";
body {
  margin: 0;
}

.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
  background: white;
}

#content {
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
  align-content: center;
  justify-content: center;
  form {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.459);
  form {
    position: relative;
    top: 50;
    left: 50%;
    transform: translate(-50%, 10%);
    width: 50%;
    background: white;
    border-radius: 10px;
    padding: 30px;
  }
}
</style>