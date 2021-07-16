import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import authForm from "../../utils/forms/auth-form";
import useForm from "../../hooks/use-form";
import styles from "./LoginForm.module.css";
import Modal from "../UI/Modal/Modal";
import ErrorList from "../UI/Form/Errors/ErrorList";
import { authActions } from "../../store/slices/auth-slice";

const LoginForm = (props) => {
  const { renderFormInputs, isFormValid, getInputValues, getFormValidities } =
    useForm(authForm);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid()) return setShowModal(true);

    const values = getInputValues();
    dispatch(authActions.login(values));
  };

  return (
    <Fragment>
      {showModal && (
        <Modal onMaskClick={() => setShowModal(false)}>
          <ErrorList errors={getFormValidities()} />
        </Modal>
      )}
      <div className={styles["form-container"]}>
        <h1>Login</h1>
        <form onSubmit={submitHandler} className={styles.form}>
          {renderFormInputs()}
          <button>Login</button>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
