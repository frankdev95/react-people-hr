import React from "react";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

export const createFormFieldConfig = (
  type,
  id,
  name,
  placeholder,
  errorMessage = null,
  label = null,
  checked = null,
  defaultValue = ""
) => {
  return {
    renderInput: (value, isValid, changeHandler, blurHandler, touched) => {
      return (
        <Input
          key={id}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          label={label}
          value={value}
          isValid={isValid}
          errorMessage={errorMessage}
          changeHandler={changeHandler}
          blurHandler={blurHandler}
          touched={touched}
          checked={checked}
        />
      );
    },
    type,
    id,
    errorMessage,
    value: defaultValue,
    isValid: false,
    touched: false,
  };
};

export const createFormSelectField = (
  id,
  placeholder,
  options,
  errorMessage = null,
  label = null,
  defaultValue = ""
) => {
  return {
    renderInput: (value, isValid, changeHandler, blurHandler, touched) => {
      return (
        <Select
          key={id}
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
          options={options}
          isValid={isValid}
          errorMessage={errorMessage}
          touched={touched}
          changeHandler={changeHandler}
          blurHandler={blurHandler}
        />
      );
    },
    id,
    errorMessage,
    value: defaultValue,
    isValid: false,
    touched: false,
  };
};

const createValidator = (ruleName, validateFunc) => {
  return {
    name: ruleName,
    validate: validateFunc,
  };
};

export const requiredRule = () => {
  return createValidator(
    "required",
    (inputValue) => inputValue.trim().length > 0
  );
};

export const emailRegex = () => {
  return createValidator("email regex", (inputValue) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      inputValue
    )
  );
};

export const minMaxLength = (min, max) => {
  return createValidator(
    "min max length",
    (inputValue) => inputValue.trim().length >= min && inputValue <= max
  );
};

export const checkLength = (length) => {
  return createValidator(
    "check length",
    (inputValue) => inputValue.trim().replace(/\s/g, "").length === length
  );
};

export const isNumber = (length) => {
  return createValidator("is number", (inputValue) => !isNaN(inputValue));
};
