import { useCallback } from "react";
import CalendarCol from "./CalendarCol";

const CalendarRow = (props) => {
  const { row, cols, startDay, endDay, offset } = props;

  const configureCols = useCallback(() => {
    const colComponents = [];

    for (let col = 1; col <= cols; col++) {
      const day = row * cols + col;
      colComponents.push(
        <CalendarCol
          key={`${row}-${col}`}
          id={`${row}-${col}`}
          day={day}
          disabled={day < startDay || day > endDay + (startDay - 1)}
          startDay={startDay}
        />
      );
    }
    return colComponents;
  }, [row, cols, startDay, endDay]);

  return <tr>{configureCols()}</tr>;
};

export default CalendarRow;
