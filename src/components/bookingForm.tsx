'use client'
import React from "react";
import { useFormControls } from "@/utils/contactFormControl";
import { Button, TextField } from "@mui/material";

console.log("useFormControls:", useFormControls);
const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export const BookingForm = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

console.log("useFormControls:", useFormControls);

  return (
    <form
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={Boolean(errors[inputFieldValue.name])}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name],
            })}
          />
        );
      })}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
  );
};
