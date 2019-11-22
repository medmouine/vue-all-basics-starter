import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "../pages/Examples/Dashboard.vue";
import UserProfile from "../pages/Examples/UserProfile.vue";
import TableList from "../pages/Examples/TableList.vue";
import Typography from "../pages/Examples/Typography.vue";
import Icons from "../pages/Examples/Icons.vue";
import Maps from "../pages/Examples/Maps.vue";
import Notifications from "../pages/Examples/Notifications.vue";
import UpgradeToPRO from "../pages/Examples/UpgradeToPRO.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/login/Login.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

export default routes;
