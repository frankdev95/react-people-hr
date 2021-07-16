import styles from "./Calendar.module.css";
import { weekdays } from "../../../assets/constants/planner";
import { useCallback } from "react";
import CalendarRow from "./CalendarRow";

const tableDimension = {
  ROWS: 6,
  COLS: 7,
};

const Calendar = (props) => {
  const { month, startDay, endDay } = props;

  const configureRows = useCallback(() => {
    const rowComponents = [];

    for (let row = 0; row < tableDimension.ROWS; row++) {
      rowComponents.push(
        <CalendarRow
          key={row}
          row={row}
          cols={tableDimension.COLS}
          startDay={startDay}
          endDay={endDay}
        />
      );
    }

    return rowComponents;
  }, [endDay, startDay]);

  return (
    <table
      className={styles.calendar}
      style={{ flexBasis: `calc((100% / 3) - (4rem / 3))` }}
    >
      <thead>
        <tr>
          <th colSpan="7" className={styles["heading-month"]}>
            {month}
          </th>
        </tr>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday} className={styles["heading-weekday"]}>
              {weekday.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{configureRows()}</tbody>
    </table>
  );
};

export default Calendar;
