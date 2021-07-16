import { useState } from "react";
import styles from "../css/ProfilePlanner.module.css";
import MainHeader from "../../components/UI/Typography/MainHeader";
import { months } from "../../assets/constants/select-data";
import MainTable from "../../components/profile/planner/MainTable";
import { years } from "../../assets/constants/planner";

const Planner = (props) => {
  const [currentMonth, setCurrentMonth] = useState(years["2021"].months[0]);

  const selectChangeHandler = (event) => {
    const { value } = event.target;
    const currentMonth = years["2021"].months.find(
      (month) => month.month === value
    );
    setCurrentMonth(currentMonth);
  };

  return (
    <section className={styles.planner}>
      <header className={styles.header}>
        <MainHeader>Planner</MainHeader>
      </header>
      <main>
        <div className={styles["select-container"]}>
          <select name="" id="" onChange={selectChangeHandler}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <MainTable month={currentMonth} />
        </div>
      </main>
    </section>
  );
};

export default Planner;
