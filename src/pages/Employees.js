import { useState, Fragment } from "react";
import styles from "./css/Employees.module.css";
import employees from "../data/employees";
import searchIcon from "../assets/images/search.png";
import plusIcon from "../assets/images/plus.png";
import MainHeader from "../components/UI/Typography/MainHeader";
import Table from "../components/employees/table/Table";
import Modal from "../components/UI/Modal/Modal";
import AddForm from "../components/UI/Form/Employees/AddForm";

const classes = [
  "td-name",
  "td-location",
  "td-department",
  "td-role",
  "td-contact",
  "td-status",
];

const Employees = () => {
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);

  const addEmployeeClickHandler = () => setShowAddEmployeeForm(true);

  return (
    <Fragment>
      {showAddEmployeeForm && (
        <Modal className={styles.modal}>
          <AddForm onModalClose={() => setShowAddEmployeeForm(false)} />
        </Modal>
      )}
      <section className={styles.container}>
        <header className={styles.header}>
          <MainHeader>Employees</MainHeader>
          <div className={styles["header-main"]}>
            <form action="">
              <div className={styles["search-bar"]}>
                <select name="" id="">
                  <option value="" hidden>
                    All categories
                  </option>
                </select>
                <input type="text" placeholder="Search..." />
                <button className={styles["search-btn"]} type="submit">
                  <img src={searchIcon} alt="search icon" />
                </button>
              </div>
            </form>
            <button
              className={styles["add-btn"]}
              onClick={addEmployeeClickHandler}
            >
              <img src={plusIcon} alt="plus icon" />
              <span>Add employee</span>
            </button>
          </div>
        </header>
        <main className={styles["employee-main"]}>
          <Table data={employees} classes={classes} />
        </main>
      </section>
    </Fragment>
  );
};

export default Employees;
