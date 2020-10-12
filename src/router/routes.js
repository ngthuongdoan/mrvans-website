import Main from "@/pages/Main.vue";
import Admin from "@/pages/Admin.vue";
import Swal from "sweetalert2";
const SECRET_KEY = "N4U2mAkPqq";
// const SECRET_KEY = "tratiendi";
const routes = [
  { path: "/", component: Main },
  {
    path: "/admin",
    component: Admin,
    beforeEnter(to, from, next) {
      Swal.fire({
        title: "Submit your Secret Key",
        input: "password",
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.value === SECRET_KEY) {
          Swal.fire({
            title: "Welcome",
            icon: "success",
          }).then(() => {
            next();
          });
          next();
        } else {
          Swal.fire({
            title: "Wrong key",
            icon: "error",
          }).then(() => {
            next("/");
          });
        }
      });
    },
  },
  { path: "*", redirect: "/" },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
