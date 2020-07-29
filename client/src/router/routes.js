import DashboardLayout from "@/components/AdminComponents/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/components/AdminComponents/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/components/AdminComponents/pages/Dashboard.vue";
import UserProfile from "@/components/AdminComponents/pages/UserProfile.vue";
import Notifications from "@/components/AdminComponents/pages/Notifications.vue";
import Icons from "@/components/AdminComponents/pages/Icons.vue";
import Maps from "@/components/AdminComponents/pages/Maps.vue";
import Typography from "@/components/AdminComponents/pages/Typography.vue";
import TableList from "@/components/AdminComponents/pages/TableList.vue";
import Main from "@/components/MainComponents/Main.vue";

const routes = [
  { path: "/", component: Main },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
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
