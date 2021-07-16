import styles from "./ErrorList.module.css";

const ErrorItem = (props) => {
  return <li className={styles["list-item"]}>{props.message}</li>;
};

export default ErrorItem;
