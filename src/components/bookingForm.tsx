"use client";
import React, { useEffect, useState } from "react";
import { useFormControls } from "@/utils/contactFormControl";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { EmailContact } from "./emailContact";
interface classBookingObject {
  name: string;
  emailHeader: string;
  selectValue: string;
  emailTemplate: string;
}

const yogaNidra: classBookingObject = {
  name: "Yoga Nidra class",
  emailHeader: "Yoga Nidra class booking inquiry",
  selectValue: "Nidra",
  emailTemplate: " Hi, I would like to join you for yoga nidra on [DATE].",
};

const privateClass: classBookingObject = {
  name: "Private class",
  emailHeader: "Private class inquiry",
  selectValue: "Private",
  emailTemplate:
    "Hi, I would like to book you for a private yoga class. on [DATE] at [TIME]. I consider myself an [BEINNGER, MODERATE, EXPERIENCED, HIGHLY EXPERIENCED] practitioner. I would like to [Please provide a brief description of what you would like to achieve from our sessions.",
};

const beginnersBundle: classBookingObject = {
  name: "Beginners bundle",
  emailHeader: "Beginners bundle inquiry",
  selectValue: "Beginners",
  emailTemplate:
    "HI, I would like to book the beginners bundle to start on [DATE].",
};

const onlineMeditation: classBookingObject = {
  name: "Online meditation",
  emailHeader: "Online meditation inquiry",
  selectValue: "Online meditation",
  emailTemplate:
    "Hi, I would like to book an online meditation session for [DATE] at [TIME], my preferred platform is [PLATFORM]",
};

const classes: classBookingObject[] = [
  yogaNidra,
  privateClass,
  beginnersBundle,
  onlineMeditation,
];

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
  const { classType } = useParams();
  const router = useRouter();
  type classTypeMap = { [key: string]: classBookingObject };

  const classTypeMap: classTypeMap = {
    yogaNidra: yogaNidra,
    privateClass: privateClass,
    beginnersBundle: beginnersBundle,
    onlineMeditation: onlineMeditation,
  };

  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  const [selectedClass, setSelectedClass] = useState<classBookingObject>(
    classTypeMap[classType as keyof classTypeMap]
  );

  const [message, setMessage] = useState<string>(yogaNidra.emailTemplate);

  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
    handleInputValue(e);
  };

  const onSuccess = () => {
    if (errorState) {
      setErrorState(false);
    }
    router.push("/thanks");
  };

  const [errorState, setErrorState] = useState<boolean>(false);

  const onError = () => {
    setErrorState(true);
  };

  useEffect(() => {
    setMessage(selectedClass.emailTemplate);
  }, [selectedClass]);

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => handleFormSubmit(e, onSuccess, onError)}
    >
      <Stack spacing={4}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Class Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedClass.name}
            label="Age"
            name={"header"}
            onChange={(e) => {
              handleInputValue(e);
              const newSelection = classes.find(
                (yogaClass) => yogaClass.name === e.target.value
              );
              setSelectedClass(newSelection!);
            }}
          >
            {classes.map((yogaClass) => {
              return (
                <MenuItem
                  value={yogaClass.name}
                  key={yogaClass.name}
                >
                  {yogaClass.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              onChange={onTextChange}
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
              value={inputFieldValue.id === "my-message" ? message : undefined}
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
        <EmailContact />
      </Stack>
    </form>
  );
};
