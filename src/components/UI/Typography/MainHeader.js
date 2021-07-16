import styles from "./Typography.module.css";

const MainHeader = (props) => (
  <h1 className={styles["main-header"]}>{props.children}</h1>
);

export default MainHeader;
