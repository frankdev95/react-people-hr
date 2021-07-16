import roles from "./roles";
import dashboard from "../images/dashboard.png";
import profile from "../images/profile.png";
import employees from "../images/employee.png";
import planner from "../images/planner.png";
import rota from "../images/rota.png";
import authorisations from "../images/authorisation.png";
import queries from "../images/query.png";
import notifications from "../images/notification.png";
import settings from "../images/settings.png";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/profile/Profile";
import Employees from "../../pages/Employees";
import Planner from "../../pages/Planner";
import Rota from "../../pages/Rota";
import Authorisations from "../../pages/Authorisations";
import Queries from "../../pages/Queries";
import Notifications from "../../pages/Notifications";
import Settings from "../../pages/Settings";

// master - me and matt
// admin - lucy, morgan, yas, brad, guy, dan, andy
// employees - everyone
// sign up section, checklist for users to set themselves up, send a link

const sidebarItems = [
  {
    name: "Dashboard",
    privillages: [roles.MASTER, roles.ADMIN, roles.PERSONELL],
    src: dashboard,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Profile",
    privillages: [roles.MASTER, roles.ADMIN, roles.PERSONELL],
    src: profile,
    path: "/profile",
    component: <Profile />,
  },
  {
    name: "Employees",
    privillages: [roles.MASTER, roles.ADMIN],
    src: employees,
    path: "/employees",
    component: <Employees />,
  },
  {
    name: "Planner",
    privillages: [roles.MASTER, roles.ADMIN],
    src: planner,
    path: "/planner",
    component: <Planner />,
  },
  {
    name: "Rota",
    privillages: [roles.MASTER, roles.ADMIN],
    src: rota,
    path: "/rota",
    component: <Rota />,
  },
  {
    name: "Authorisations",
    privillages: [roles.MASTER, roles.ADMIN],
    src: authorisations,
    path: "/authorisations",
    component: <Authorisations />,
  },
  {
    name: "Queries",
    privillages: [roles.MASTER, roles.ADMIN],
    src: queries,
    path: "/queries",
    component: <Queries />,
  },
  {
    name: "Notifications",
    privillages: [roles.MASTER, roles.ADMIN],
    src: notifications,
    path: "/notifications",
    component: <Notifications />,
  },
  {
    name: "Settings",
    privillages: [roles.MASTER, roles.ADMIN],
    src: settings,
    path: "/settings",
    component: <Settings />,
  },
];

// converts the object to an array
// loops through each item in the array
// if the privillages array present in each item holds the queried role return that item
export const getSidebar = (role) =>
  Object.values(sidebarItems).filter((item) =>
    item.privillages.find((permission) => permission === role)
  );

const masterSidebar = getSidebar(roles.MASTER);
const adminSidebar = getSidebar(roles.ADMIN);
const personellSidebar = getSidebar(roles.PERSONELL);

export { masterSidebar, adminSidebar, personellSidebar };
