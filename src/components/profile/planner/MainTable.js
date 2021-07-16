import { useEffect, useState, useRef } from "react";
import styles from "./Planner.module.css";
import { profilePlannerTypes } from "../../../assets/constants/table";
import TypeTable from "./TypeTable";
import DayTable from "./DayTable";
import { sidebarDimensions } from "../../../assets/constants/dimensions";

const colWidth = 60;

const MainTable = (props) => {
  const { month } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const tableRef = useRef();
  const tableContainerRef = useRef();

  useEffect(() => {
    let sidebarWidth = 0;
    const tableWidth = tableRef.current.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;

    for (const input of sidebarDimensions) {
      sidebarWidth += input.getBoundingClientRect().width;
    }

    const availableWidth = windowWidth - sidebarWidth - tableWidth - 30 * 2;

    setTableWidth(availableWidth);
  }, []);

  const moveTableHandler = (arrowType) => {
    const moveXAmount = colWidth * 1;
    const el = tableContainerRef.current;
    const currentScroll = el.scrollLeft;

    console.log(currentScroll);
    console.log(el.getBoundingClientRect());
    if (arrowType === "left") {
      if (currentScroll > 0) {
        el.scrollLeft -= moveXAmount;
      }
    } else {
      el.scrollLeft += 60;
    }
  };

  return (
    <div className={styles.container}>
      <TypeTable
        types={profilePlannerTypes}
        className={styles["type-table"]}
        ref={tableRef}
        onArrowClick={moveTableHandler}
      />
      <div
        className={styles["day-table-container"]}
        style={{ maxWidth: `${tableWidth}px` }}
        ref={tableContainerRef}
      >
        <DayTable
          types={profilePlannerTypes.length}
          monthsDuration={month.endDay}
          startingDay={month.startDay}
          className={styles["day-table"]}
        />
      </div>
    </div>
  );
};

export default MainTable;
