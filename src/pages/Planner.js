import { useRef, useState, useEffect } from "react";
import { years } from "../assets/constants/planner";
import arrowIcon from "../assets/images/arrow.png";
import optionsIcon from "../assets/images/options.png";
import calendarIcon from "../assets/images/calendar.png";
import viewIcon from "../assets/images/view.png";
import styles from "./css/Planner.module.css";
import MainHeader from "../components/UI/Typography/MainHeader";
import Calendar from "../components/planner/Calendar/Calendar";
import Filters from "../components/planner/Filters/Filters";

const date = new Date();
const yearRange = Object.keys(years);

const Planner = () => {
  const headerRef = useRef();
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [containerHeight, setContainerHeight] = useState("100vh");
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    const headerHeight = headerRef.current.getBoundingClientRect().height;
    setContainerHeight(headerHeight);
  }, []);

  const yearForwardHandler = () => {
    if (currentYear < parseInt(yearRange[yearRange.length - 1])) {
      setCurrentYear((prev) => prev + 1);
    }
  };
  const yearBackwardHandler = () => {
    if (currentYear > parseInt(yearRange[0])) {
      setCurrentYear((prev) => prev - 1);
    }
  };

  const toggleFilterHandler = () => setShowFilter((prev) => !prev);

  return (
    <section className={styles.container}>
      <header className={styles.header} ref={headerRef}>
        <div className={styles["header-container"]}>
          <MainHeader>Planner</MainHeader>
          <div className={styles["filter-options"]}>
            <div className={styles["filter-option"]}>
              <img
                className={styles["view-icon"]}
                src={viewIcon}
                alt="view icon"
                onClick={toggleFilterHandler}
              />
            </div>
            <div className={styles["filter-option"]}>
              <img
                className={styles["view-icon"]}
                src={calendarIcon}
                alt="view icon"
              />
            </div>
            <div className={styles["filter-option"]}>
              <img
                className={styles["view-icon"]}
                src={optionsIcon}
                alt="view icon"
              />
            </div>
          </div>
        </div>
        {showFilter && <Filters />}

        <div className={styles["year-controller"]}>
          <div className={styles["year-container"]}>
            <img
              src={arrowIcon}
              alt="arrow icon"
              onClick={yearBackwardHandler}
            />
            <h1>
              January {currentYear} - December {currentYear}
            </h1>
            <img
              src={arrowIcon}
              alt="arrow icon"
              onClick={yearForwardHandler}
            />
          </div>
        </div>
      </header>
      <main>
        <div
          className={styles["calendar-container"]}
          style={{
            maxHeight: `calc(100vh - ${containerHeight}px)`,
          }}
        >
          {years[currentYear].months.map((monthObj) => (
            <Calendar
              key={monthObj.month}
              month={monthObj.month}
              startDay={monthObj.startDay}
              endDay={monthObj.endDay}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Planner;
