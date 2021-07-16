import {
  createFormFieldConfig,
  requiredRule,
} from "../helper-functions/form-functions";

const authForm = {
  username: {
    ...createFormFieldConfig(
      "text",
      "username",
      "Username",
      "Please enter a valid username."
    ),
    validators: [requiredRule("Username")],
  },
  password: {
    ...createFormFieldConfig(
      "password",
      "password",
      "Password",
      "Please enter a valid password."
    ),
    validators: [requiredRule("Password")],
  },
};

export default authForm;
