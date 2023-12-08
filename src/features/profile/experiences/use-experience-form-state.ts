import { useState, ChangeEvent } from "react";

const useExperienceFormState = () => {
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);
  const [description, setDescription] = useState("");

  const onChangeBusinessName = (event: ChangeEvent<HTMLInputElement>) => {
    setBusinessName(event.target.value);
  };
  const onChangeRole = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  const onChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(event.target.value));
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(event.target.value));
  };

  return {
    businessName,
    role,
    location,
    startDate,
    endDate,
    description,
    setBusinessName,
    setRole,
    setLocation,
    setStartDate,
    setEndDate,
    setDescription,
    onChangeBusinessName,
    onChangeRole,
    onChangeLocation,
    onChangeStartDate,
    onChangeEndDate,
    onChangeDescription,
  };
};

export default useExperienceFormState;
