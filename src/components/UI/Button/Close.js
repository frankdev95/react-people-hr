import closeIcon from "../../../assets/images/cancel.png";
import styles from "./Buttons.module.css";

const Close = (props) => {
  const { onClick, className } = props;

  return (
    <div onClick={onClick} className={`${styles.close} ${className || ""}`}>
      <img src={closeIcon} alt="close icon" />
    </div>
  );
};

export default Close;
