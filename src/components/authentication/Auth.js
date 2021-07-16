import React from "react";
import LoginForm from "./LoginForm";
import styles from "./Auth.module.css";

const Auth = (props) => {
  return (
    <section className={styles.section}>
      <LoginForm />
    </section>
  );
};

export default Auth;
