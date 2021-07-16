import { useState, useReducer, useEffect } from "react";
import useForm from "../../../../hooks/use-form";
import styles from "./AddForm.module.css";
import forms from "../../../../utils/forms/add-employee-form";
import Stage from "../Stage.js/Stage";
import Close from "../../Button/Close";
import FormCompleted from "./FormCompleted";

const initialFormStagesState = [
  {
    number: 1,
    text: "Personal",
    active: true,
    values: null,
  },
  {
    number: 2,
    text: "Job",
    active: false,
    values: null,
  },
  {
    number: 3,
    text: "Finished!",
    active: false,
    values: null,
  },
];

const formStageReducer = (state, action) => {
  if (action.type === "UPDATE_ACTIVE_STAGE") {
    const stages = [...state];

    const oldStageIndex = state.findIndex((stage) => stage.active === true);
    const oldStage = { ...state[oldStageIndex] };

    const nextStage = { ...state[action.currentForm] };

    oldStage.active = false;
    nextStage.active = true;

    oldStage.values = action.values;

    stages[oldStageIndex] = oldStage;
    stages[action.currentForm] = nextStage;

    return stages;
  }

  return state;
};

const AddForm = (props) => {
  const [currentForm, setCurrentForm] = useState(0);
  const [formStages, setFormStages] = useReducer(
    formStageReducer,
    initialFormStagesState
  );

  const {
    renderFormInputs,
    isFormValid,
    getInputValues,
    setForm,
    setInputsAsTouched,
  } = useForm(forms[currentForm]);

  const { onModalClose } = props;

  useEffect(() => {
    if (currentForm < formStages.length - 1) {
      const form = forms[currentForm];

      if (formStages[currentForm].values) {
        Object.values(form).forEach((inputObj, index) => {
          inputObj.value = formStages[currentForm].values[index].value;
          inputObj.isValid = formStages[currentForm].values[index].isValid;
        });
      }

      setForm(forms[currentForm]);
    } else {
      const formValues = [];
    }
  }, [currentForm, setForm, formStages]);

  const nextFormHandler = () => {
    // if (!isFormValid()) return setInputsAsTouched();
    setCurrentForm((prev) => {
      setFormStages({
        type: "UPDATE_ACTIVE_STAGE",
        currentForm: prev + 1,
        values: getInputValues(),
      });
      return prev + 1;
    });
  };

  const previousFormHandler = () => {
    setCurrentForm((prev) => {
      setFormStages({
        type: "UPDATE_ACTIVE_STAGE",
        currentForm: prev - 1,
        values: getInputValues(),
      });
      return prev - 1;
    });
  };

  const configureFormInputs = () => {
    const inputs = [];
    const radios = [];
    renderFormInputs().forEach((input) => {
      if (input.props.type === "radio") return radios.push(input);
      inputs.push(input);
    });

    if (radios.length > 0) {
      const radiosComponent = (
        <div className={styles["gender-field"]}>
          <span>Gender</span>
          <div className={styles.radios}>{radios.map((radio) => radio)}</div>
        </div>
      );

      inputs.splice(3, 0, radiosComponent);
    }

    return inputs;
  };

  return (
    <div className={styles.container}>
      <Close onClick={onModalClose} className={styles.close} />
      <h1>New Employee</h1>
      <p>
        Fill in the fields on each screen to create a new employee within your
        busines.
      </p>
      <Stage stages={formStages} className={styles.number} />
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        {currentForm < formStages.length - 1 ? (
          configureFormInputs()
        ) : (
          <FormCompleted />
        )}
        <div className={styles["btn-container"]}>
          {currentForm > 0 && (
            <button
              className={styles["prev-btn"]}
              onClick={previousFormHandler}
            >
              Back
            </button>
          )}
          {currentForm < formStages.length - 1 && (
            <button
              type="submit"
              className={styles["next-btn"]}
              onClick={nextFormHandler}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddForm;
