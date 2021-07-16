import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.imgSrc} alt="logo" />
      <p>{props.name}</p>
    </div>
  );
};

export default Logo;
