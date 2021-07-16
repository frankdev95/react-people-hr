import summary from "../images/find.png";
import planner from "../images/planner.png";
import profile from "../images/profile.png";
import contact from "../images/contact.png";
import Summary from "../../pages/profile/Summary";
import Planner from "../../pages/profile/Planner";
import Personal from "../../pages/profile/Personal";
import Contact from "../../pages/profile/Contact";

const profileItems = [
  {
    name: "Summary",
    path: "/profile/summary",
    src: summary,
    component: <Summary />,
  },
  {
    name: "Planner",
    src: planner,
    path: "/profile/planner",
    component: <Planner />,
  },
  {
    name: "Personal",
    src: profile,
    path: "/profile/personal",
    component: <Personal />,
  },
  {
    name: "Contacts",
    src: contact,
    path: "/profile/contacts",
    component: <Contact />,
  },
];

export default profileItems;
