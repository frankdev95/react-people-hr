import Number from "../../Badge/Number";
import styles from "./Stage.module.css";
import nextIcon from "../../../../assets/images/next.png";
import { Fragment } from "react";

const Stage = (props) => {
  const { stages, className } = props;

  return (
    <div className={styles.container}>
      {stages.map((stage, index) => {
        return (
          <Fragment key={stage.number}>
            {index > 0 && index < stages.length && (
              <img className={styles.arrow} src={nextIcon} alt="arrow icon" />
            )}
            <Number
              number={stage.number}
              text={stage.text || null}
              className={className}
              active={stage.active}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Stage;
