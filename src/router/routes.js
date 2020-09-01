import Main from "@/pages/Main.vue";
import Admin from "@/pages/Admin.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/admin", component: Admin },
  { path: "*", redirect: "/" }
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
