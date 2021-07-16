import successIcon from "../../../../assets/images/success.png";
import styles from "./FormCompleted.module.css";

const FormCompleted = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-title"]}>
          <img src={successIcon} alt="success icon" />
          <h1>Form Completed!</h1>
        </div>
        <p>Would task would to like to do next?</p>
      </div>
      <div className={styles.buttons}>
        <button>View Employee</button>
        <button>Create another Employee</button>
        <button>Finish and exit</button>
      </div>
    </div>
  );
};

export default FormCompleted;
