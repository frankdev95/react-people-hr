import { useRef } from "react";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import styles from "../css/Profile.module.css";
import profileItems from "../../assets/constants/profile-sidebar";
import { Route, Switch } from "react-router";

const Profile = () => {
  return (
    <section className={styles.container}>
      <Sidebar
        items={profileItems}
        classNames={{
          sidebar: styles.sidebar,
          "sidebar-link": styles["sidebar-link"],
          "sidebar-item": styles["sidebar-item"],
        }}
      />
      <Switch>
        {profileItems.map((item) => (
          <Route
            key={item.name}
            path={`/profile/${item.name.toLowerCase()}`}
            exact
          >
            {item.component}
          </Route>
        ))}
      </Switch>
    </section>
  );
};

export default Profile;
