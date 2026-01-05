"use client";

import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type contactValues = {
  fullName: string;
  email: string;
  message: string;
  header: string;
};

type errors = {
  [key: string]: string;
};

const PostContactForm = async (
  values: contactValues,
  successCallback: () => void,
  errorCallback: () => void
): Promise<void> => {
  const { fullName, email, message, header } = values;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .post("https://formsubmit.co/ajax/4be8820f1cc70012aeb9bde5c611356f", {
      name: fullName,
      message: message,
      email: email,
      header,
    })
    .then((response) => {
      console.log(response)
      successCallback()
    })
    .catch((error) => {console.log(error)
      errorCallback();
    });
};

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  header: ""
};

export const useFormControls = () => {
  const [values, setValues] = useState<contactValues>(initialFormValues);
  const [errors, setErrors] = useState<errors>({});

  const validate = (fieldValues = values) => {
    const temp: errors = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string> 
  ) => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ ...values, [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validate();

    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();

    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
