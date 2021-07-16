import React, { useRef, useState } from "react";
import styles from "./Input.module.css";
import { Overlay, Tooltip } from "react-bootstrap";

const Input = (props) => {
  const target = useRef(null);

  const {
    type,
    id,
    name,
    label,
    placeholder,
    checked,
    value,
    isValid,
    errorMessage,
    changeHandler,
    blurHandler,
    touched,
  } = props;

  return (
    <div className={styles["form-group"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={target}
        id={id}
        type={type}
        name={name}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
        placeholder={placeholder}
      />
      <Overlay
        target={target.current}
        show={!isValid && touched && errorMessage}
        placement="right"
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {errorMessage}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default Input;
