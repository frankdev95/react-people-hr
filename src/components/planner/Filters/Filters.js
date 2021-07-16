import { useReducer, useEffect } from "react";
import styles from "./Filters.module.css";
import employeeIcon from "../../../assets/images/employee.png";
import departmentIcon from "../../../assets/images/department.png";
import officeIcon from "../../../assets/images/offices.png";
import { offices } from "../../../assets/constants/planner";
import FilterOptions from "./FilterOptions";

const officesList = Object.keys(offices);

const initialFilterState = {
  offices: {
    show: false,
    selected: [],
    list: officesList,
  },
  departments: {
    show: false,
    selected: [],
    list: [],
  },
  employees: {
    show: false,
    selected: [],
    list: [],
  },
};

const filterStateReducer = (state, action) => {
  if (action.type === "TOGGLE") {
    const filterType = { ...state[action.filter] };
    filterType.show = !filterType.show;

    return {
      ...state,
      [action.filter]: filterType,
    };
  }
  if (action.type === "UPDATE_OPTION") {
    const filterType = { ...state[action.filter] };
    const selectedFilters = [...filterType.selected];

    const selectedFilterIndex = selectedFilters.findIndex(
      (option) => option === action.option
    );

    if (selectedFilterIndex > -1) {
      selectedFilters.splice(selectedFilterIndex, 1);
    } else {
      selectedFilters.push(action.option);
    }

    return {
      ...state,
      [action.filter]: {
        ...filterType,
        selected: selectedFilters,
      },
    };
  }
  if (action.type === "SET_DEPARTMENTS") {
    const departmentsFilter = { ...state.departments };
    const selectedOffices = state.offices.selected;

    const departments = [];

    if (selectedOffices.length > 0) {
      selectedOffices.forEach((type, index) => {
        for (const office of Object.values(offices)) {
          if (office.name.toLowerCase() === type) {
            for (const department of office.departments) {
              if (index > 0) {
                if (!departments.find((d) => d === department.name)) {
                  departments.push(department.name);
                }
              } else {
                departments.push(department.name);
              }
            }
            break;
          }
        }
      });
    }

    // loop through selected departments - if selected is not in departments - remove from selecte

    departmentsFilter.list = departments;

    return {
      ...state,
      departments: departmentsFilter,
    };
  }
  if (action.type === "SET_EMPLOYEES") {
    const employeeFilter = { ...state.employees };
    const selectedOffices = state.offices.selected;
    const selectedDepartments = state.departments.selected;

    let employees = [];

    if (selectedDepartments.length > 0 && selectedOffices.length > 0) {
      for (const type of selectedOffices) {
        for (const office of Object.values(offices)) {
          if (office.name.toLowerCase() === type) {
            for (const d1 of selectedDepartments) {
              for (const d2 of office.departments) {
                if (d1 === d2.name) {
                  employees = employees.concat(d2.employees);
                  break;
                }
              }
            }
            break;
          }
        }
      }
    }

    employeeFilter.list = employees;

    return {
      ...state,
      employees: employeeFilter,
    };
  }
  return state;
};

const Filters = () => {
  const [filterState, setFilterState] = useReducer(
    filterStateReducer,
    initialFilterState
  );

  const optionClickHandler = (type, option) => {
    setFilterState({
      type: "UPDATE_OPTION",
      filter: type,
      option,
    });
  };

  useEffect(() => {
    setFilterState({
      type: "SET_DEPARTMENTS",
    });
  }, [filterState.offices.selected]);

  useEffect(() => {
    setFilterState({ type: "SET_EMPLOYEES" });
  }, [filterState.departments.selected, filterState.offices.selected]);

  useEffect(() => {}, []);

  return (
    <div className={styles["filters-container"]}>
      <div className={styles.filters}>
        <div className={styles["filter-item"]}>
          <div
            className={styles["filter-type"]}
            onClick={() =>
              setFilterState({ type: "TOGGLE", filter: "offices" })
            }
          >
            <img src={officeIcon} alt="office icon" />
            <h5>Offices</h5>
          </div>

          {filterState.offices.show && (
            <FilterOptions
              options={filterState.offices.list}
              selected={filterState.offices.selected}
              onClick={optionClickHandler.bind(null, "offices")}
            />
          )}
        </div>
        <div className={styles["filter-item"]}>
          <div
            className={styles["filter-type"]}
            onClick={() =>
              setFilterState({ type: "TOGGLE", filter: "departments" })
            }
          >
            <img src={departmentIcon} alt="department icon" />
            <h5>Departments</h5>
          </div>

          {filterState.departments.show &&
            filterState.offices.selected.length > 0 && (
              <FilterOptions
                options={filterState.departments.list}
                selected={filterState.departments.selected}
                onClick={optionClickHandler.bind(null, "departments")}
              />
            )}
        </div>
        <div
          className={`${styles["filter-item"]} ${styles["employees-filter"]}`}
        >
          <div
            className={styles["filter-type"]}
            onClick={() =>
              setFilterState({ type: "TOGGLE", filter: "employees" })
            }
          >
            <img src={employeeIcon} alt="employee icon" />
            <h5>Employees</h5>
          </div>
          {filterState.employees.show &&
            filterState.departments.selected.length > 0 && (
              <FilterOptions
                className={styles["employee-filter-options"]}
                options={filterState.employees.list}
                selected={filterState.employees.selected}
                onClick={optionClickHandler.bind(null, "employees")}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
