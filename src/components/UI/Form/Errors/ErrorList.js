import React from "react";
import ErrorItem from "./ErrorItem";
import styles from "./ErrorList.module.css";

const ErrorList = (props) => {
  return (
    <div className={styles.container}>
      <h3>Please check your form fields</h3>
      <ul className={styles.list}>
        {props.errors.map((error) => (
          <ErrorItem
            key={error.field}
            field={error.field}
            message={error.message}
          />
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
