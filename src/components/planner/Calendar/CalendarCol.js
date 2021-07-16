import styles from "./Calendar.module.css";

const CalendarCol = (props) => {
  const { id, day, disabled, startDay } = props;
  return (
    <td className={`${styles.cell} ${disabled ? styles.disabled : ""}`}>
      {disabled ? "" : day - (startDay - 1)}
    </td>
  );
};

export default CalendarCol;
