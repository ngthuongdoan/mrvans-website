<template>
  <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h4>ADMIN PAGE</h4>
      </div>
      <ul class="list-unstyled components">
        <li @click="changeComponent($event,'AddFood')">
          <a>Thêm món</a>
        </li>
        <li @click="changeComponent($event,'UpdateFood')">
          <a>Sửa món</a>
        </li>
        <li @click="changeComponent($event,'DeleteFood')">
          <a>Xóa món</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeComponent(event, value) {
      this.$emit("change-component", value);
    },
  },
};
</script>

<style>
/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
#page-dropdown {
  width: 100%;
  padding: 10px 20px;
}
#sidebar {
  float: left;
  width: 200px;
  height: 100vh;
  margin: 0;
  background: #28292e;
  color: #fff;
  transition: all 0.3s;
  text-align: left;
}
#sidebar .sidebar-header {
  padding: 20px;
  background: #1f2024;
  text-align: center;
}
#sidebar .sidebar-header h4 {
  font-size: 20px;
}
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #28292e;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  cursor: pointer;
  font-size: 1.1em;
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 10px 10px 20px;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #fddb3a;
}

ul ul a {
  font-size: 0.9em !important;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

#signoutBtn {
  padding: 10px 20px;
  margin-left: 25%;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    /* margin-left: -250px; */
    width: 100px;
    font-size: 12px;
  }
}
</style>