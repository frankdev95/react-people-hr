import styles from "./Planner.module.css";
import plusIcon from "../../../assets/images/plus.png";

const DayRow = (props) => {
  const { monthsDuration, startingDay, row, days } = props;

  const configureRow = () => {
    const rowData = [];
    // loops through each col for each row
    for (let col = 0; col < monthsDuration; col++) {
      if (row === 0) {
        rowData.push(
          <td key={`${row}-${col}`} className={styles["day-td-head"]}>
            {days[(col + startingDay - 1) % 7]}
          </td>
        );
        continue;
      } else if (row === 1) {
        rowData.push(
          <td key={`${row}-${col}`} className={styles["day-td-main"]}>
            {col + 1}
          </td>
        );
        continue;
      }

      rowData.push(
        <td
          key={`${row}-${col}`}
          className={`${styles["day-td-main"]} ${styles["day-td-plus"]}`}
        >
          <img src={plusIcon} alt="plus icon" />
        </td>
      );
    }

    return rowData;
  };

  return <tr>{configureRow()}</tr>;
};

export default DayRow;
