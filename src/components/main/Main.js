import { Switch, Route } from "react-router-dom";
import styles from "./Main.module.css";
import Sidebar from "../layout/sidebar/Sidebar";
import { masterSidebar as sidebarItems } from "../../assets/constants/main-sidebar";

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.interface}>
        <Sidebar
          items={sidebarItems}
          classNames={{
            sidebar: styles.sidebar,
            "sidebar-link": styles["sidebar-link"],
            "sidebar-item": styles["sidebar-item"],
            active: styles.active,
          }}
          pathIndex={1}
        />
        <Switch>
          {sidebarItems.map((item) => {
            return (
              <Route key={item.name} path={item.path}>
                {item.component}
              </Route>
            );
          })}
        </Switch>
      </section>
    </main>
  );
};

export default Main;
