import React from "react";
import styles from "./Planner.module.css";
import arrowIcon from "../../../assets/images/next.png";

const TypeTable = React.forwardRef((props, ref) => {
  const { className, types, onArrowClick } = props;

  return (
    <table className={className} ref={ref}>
      <tbody>
        <tr>
          <td>
            <span className={styles["arrows-container"]}>
              <img
                src={arrowIcon}
                alt="arrow icon"
                onClick={onArrowClick.bind(null, "left")}
              />
              <img
                src={arrowIcon}
                alt="arrow icon"
                onClick={onArrowClick.bind(null, "right")}
              />
            </span>
          </td>
        </tr>
        <tr>
          <td className={styles["types-main"]}>Type</td>
        </tr>
        {types.map((type) => (
          <tr key={type} className={styles["types-main"]}>
            <td>{type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default TypeTable;
