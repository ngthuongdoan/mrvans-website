import Main from "@/pages/Main.vue";
import Admin from "@/pages/Admin.vue";
import Swal from "sweetalert2";
import axios from "axios";

const routes = [
    {path: "/", component: Main},
    {
      path: "/admin",
      component: Admin,
      async beforeEnter(to, from, next) {
        try {
          const result = await Swal.fire({
            title: "Submit your Secret Key",
            input: "password",
            confirmButtonText: "Submit",
          });
          console.log(result.value);
          console.log(typeof result.value);

          await axios.post("/secret-key", result.value);
          Swal.fire({
            title: "Welcome",
            icon: "success",
          });
          next();
        } catch (e) {
          await Swal.fire({
            title: e.message,
            icon: "error",
          })
          next("/admin");
        }
      },
    },
    {
      path: "*", redirect: "/"
    },
  ]
;

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
