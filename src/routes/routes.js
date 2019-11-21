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
import Jobs from "../pages/Jobs";
import SingleJob from "../pages/SingleJob";
import Candidates from "../pages/Candidates";
import CandidateProfile from "../pages/CandidateProfile";

const routes = () => [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "menu.home",
        component: Home
      },
      {
        path: "/jobs",
        name: "menu.jobs",
        component: Jobs
      },
      {
        path: "/jobs/:id",
        name: "menu.jobs",
        component: SingleJob
      },
      {
        path: "/user",
        name: "pages.userprofile",
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
      },
      {
        path: "/candidates",
        name: "pages.candidates",
        component: Candidates
      },
      {
        path: "/candidates/:id",
        name: "pages.candidates",
        component: CandidateProfile
      },
    ]
  },
  {
    path: "/examples",
    component: DashboardLayout,
    redirect: "/examples/dashboard",
    children: [
      {
        path: "/examples/dashboard",
        name: "Dashboard",
        component: Dashboard
      },

      {
        path: "/examples/user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "/examples/table",
        name: "Table List",
        component: TableList
      },
      {
        path: "/examples/typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "/examples/icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "/examples/maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "/examples/notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "/examples/upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
