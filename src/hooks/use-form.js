import React, { useState } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  // returns an array of input components each connected to the event functions
  const renderFormInputs = () => {
    return Object.values(form).map((inputObj, index) => {
      const { value, isValid, touched, renderInput } = inputObj;
      return renderInput(
        value,
        isValid,
        onInputChangeHandler,
        onBlurHandler,
        touched
      );
    });
  };

  // loops through the validators array which hold the validator objects
  // fires the validator function against the input field to check is validity
  // if any come back invalid the input field is invalid
  const isInputValid = (inputField) => {
    if (!inputField.validators) return true;
    for (const rule of inputField.validators) {
      if (!rule.validate(inputField.value)) {
        return false;
      }
    }
    return true;
  };

  // loops through each input object and checks each inputs validity
  // if any input is invalid the form is invalid
  const isFormValid = () => {
    for (const inputObj of Object.values(form)) {
      if (!inputObj.isValid && inputObj.errorMessage) {
        return false;
      }
    }

    return true;
  };

  const getFormValidities = () => {
    const validities = [];

    for (const inputObj of Object.values(form)) {
      if (!inputObj.isValid && inputObj.errorMessage) {
        validities.push({
          field: inputObj.id,
          message: inputObj.errorMessage,
        });
      }
    }

    return validities;
  };

  const setInputsAsTouched = () => {
    const formCopy = { ...form };
    for (const inputObj of Object.values(formCopy)) {
      inputObj.touched = true;
    }

    setForm(formCopy);
  };

  const onBlurHandler = (event) => {
    const { id } = event.target;
    const inputObj = { ...form[id] };

    inputObj.touched = true;

    setForm({ ...form, [id]: inputObj });
  };

  // every time an on change event is fired on an input inside the array, it fires this function
  // the function receives the event information to map it to the particular input inside the array
  // the properties are updated on the input element to reflect the changes through the event
  // the updated form is then set with the old state and the updated input object properties
  // the component that uses this hook is then re-rendered and the functions are newly registered in memory
  // the newly registered functions that use the new form values can be called to observe the recent changes
  const onInputChangeHandler = (event) => {
    const { id, value } = event.target;

    const inputObj = { ...form[id] };

    inputObj.value = value;

    const isValid = isInputValid(inputObj);

    if (isValid && !inputObj.isValid) inputObj.isValid = true;
    if (!isValid && inputObj.isValid) inputObj.isValid = false;

    setForm({ ...form, [id]: inputObj });
  };

  const getInputValues = () => {
    return Object.values(form).map((inputObj) => {
      return {
        id: inputObj.id,
        value: inputObj.value,
        isValid: inputObj.isValid,
      };
    });
  };

  return {
    renderFormInputs,
    isFormValid,
    getInputValues,
    getFormValidities,
    setForm,
    setInputsAsTouched,
  };
};

export default useForm;
