import { useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import styles from "./Select.module.css";

const Select = (props) => {
  const target = useRef();
  const {
    id,
    label,
    placeholder,
    value,
    options,
    isValid,
    touched,
    errorMessage,
    changeHandler,
    blurHandler,
  } = props;

  return (
    <div className={styles.container}>
      {label && <label for={id}>{label}</label>}
      <select
        name={id}
        id={id}
        ref={target}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
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

export default Select;
