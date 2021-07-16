import DayRow from "./DayRow";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DayTable = (props) => {
  const { className, monthsDuration, startingDay, types } = props;

  const configureRows = () => {
    const rowComponents = [];

    for (let row = 0; row <= types + 1; row++) {
      rowComponents.push(
        <DayRow
          key={row}
          monthsDuration={monthsDuration}
          startingDay={startingDay}
          row={row}
          days={days}
        />
      );
    }

    return rowComponents;
  };

  return (
    <table className={className}>
      <tbody>{configureRows()}</tbody>
    </table>
  );
};

export default DayTable;
