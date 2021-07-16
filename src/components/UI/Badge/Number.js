import { useState, useEffect } from "react";
import styles from "./Number.module.css";

const Number = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { number, text, className, active } = props;

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div className={`${className} ${isActive ? styles.active : ""}`}>
      <div>
        <span>{number}</span>
      </div>
      {text && <span>{text}</span>}
    </div>
  );
};

export default Number;
