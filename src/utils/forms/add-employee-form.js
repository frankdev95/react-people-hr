import {
  createFormFieldConfig,
  createFormSelectField,
  requiredRule,
  emailRegex,
  checkLength,
  isNumber,
} from "../helper-functions/form-functions";

import { holidayYears } from "../../assets/constants/select-data";

const personalInformation = {
  "first-name": {
    ...createFormFieldConfig(
      "text",
      "first-name",
      "first-name",
      "First Name",
      "First name is required"
    ),
    validators: [requiredRule()],
  },
  "last-name": {
    ...createFormFieldConfig(
      "text",
      "last-name",
      "last-name",
      "Last Name",
      "Last name is required"
    ),
    validators: [requiredRule()],
  },
  email: {
    ...createFormFieldConfig(
      "email",
      "email",
      "email",
      "Email Address",
      "Please make sure email address is valid"
    ),
    validators: [requiredRule(), emailRegex()],
  },
  male: {
    ...createFormFieldConfig("radio", "male", "gender", null, null, "Male"),
  },
  female: {
    ...createFormFieldConfig("radio", "female", "gender", null, null, "Female"),
  },
  unspecified: {
    ...createFormFieldConfig(
      "radio",
      "unspecified",
      "gender",
      null,
      null,
      "Unspecified",
      "checked"
    ),
  },
  dob: {
    ...createFormFieldConfig(
      "date",
      "dob",
      "dob",
      "Date of Birth",
      "Date of Birth is required "
    ),
    validators: [requiredRule()],
  },
  "address-line-one": {
    ...createFormFieldConfig(
      "text",
      "address-line-one",
      "address-line-one",
      "Address line 1",
      "First line of address is required"
    ),
  },
  "address-line-two": {
    ...createFormFieldConfig(
      "text",
      "address-line-two",
      "address-line-two",
      "Address line 2",
      null
    ),
  },
  town: {
    ...createFormFieldConfig(
      "text",
      "town",
      "town",
      "Town",
      "Town is required"
    ),
    validators: [requiredRule()],
  },
  city: {
    ...createFormFieldConfig(
      "text",
      "city",
      "city",
      "City",
      "City is required"
    ),
    validators: [requiredRule()],
  },
  postcode: {
    ...createFormFieldConfig(
      "text",
      "postcode",
      "postcode",
      "Post Code",
      "Please enter a valid postcode"
    ),
    validators: [requiredRule(), checkLength(6)],
  },
  telephone: {
    ...createFormFieldConfig(
      "text",
      "telephone",
      "telephone",
      "Telephone Number",
      "Telephone Number is required"
    ),
    validators: [requiredRule()],
  },
};

const jobInformation = {
  company: {
    ...createFormSelectField(
      "company",
      "Select a company",
      ["Alive Digital", "Magnus Search"],
      "Company is required"
    ),
  },
  location: {
    ...createFormSelectField(
      "location",
      "Select a location",
      ["Maidstone", "Ashford", "Bristol"],
      "Location is required"
    ),
  },
  department: {
    ...createFormSelectField(
      "department",
      "Select a department",
      ["Development", "Design", "Sales"],
      "Department is required"
    ),
  },
  role: {
    ...createFormSelectField(
      "role",
      "Select a job role",
      ["Web Developer", "Accountant", "Software Designer"],
      "Role is required"
    ),
  },
  manager: {
    ...createFormSelectField("manager", "Select who you report to", [
      "Matt Kershaw",
      "Lucy Feebleman",
      "Nova Pavel",
    ]),
  },
  "start-date": {
    ...createFormFieldConfig(
      "date",
      "start-date",
      "start-date",
      null,
      "Start Date Required",
      "Start Date"
    ),
  },
  "ni-number": {
    ...createFormFieldConfig(
      "text",
      "ni-number",
      "ni-number",
      "National Insurance Number"
    ),
  },
  "holiday-year": {
    ...createFormSelectField(
      "holiday-year",
      "Select Holiday Year",
      holidayYears
    ),
  },
  "work-pattern": {
    ...createFormSelectField(
      "work-pattern",
      "Select Work Pattern",
      [
        "Monday to Friday 9am to 5:30pm (37.5 Hrs)",
        "Monday to Friday 9am to 5:00pm (35 Hrs)",
      ],
      "Work Pattern Required"
    ),
  },
  "contracted-hours": {
    ...createFormFieldConfig(
      "text",
      "contracted-hours",
      "contracted-hours",
      "Contracted Hours",
      "Please enter a valid number"
    ),
    validators: [requiredRule(), isNumber()],
  },
  "fulltime-hours": {
    ...createFormFieldConfig(
      "text",
      "fulltime-hours",
      "fulltime-hours",
      "Full Time Hours",
      "Please enter a valid number"
    ),
    validators: [requiredRule(), isNumber()],
  },
  "fulltime-entitlement": {
    ...createFormFieldConfig(
      "text",
      "fulltime-entitlement",
      "fulltime-entitlement",
      "Full Time Annual Holiday Entitlement (Days)"
    ),
  },
};

const forms = [personalInformation, jobInformation];

export default forms;
