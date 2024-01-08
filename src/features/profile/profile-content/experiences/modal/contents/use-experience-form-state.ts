import { useState, ChangeEvent } from "react";
import { Dayjs } from "dayjs";

const useExperienceFormState = () => {
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState<boolean | null>(true);

  const onChangeBusinessName = (event: ChangeEvent<HTMLInputElement>) => {
    setBusinessName(event.target.value);
  };
  const onChangeRole = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  const onChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const onChangeStartDate = (date: Dayjs | null) => {
    setStartDate(date);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onChangeEndDate = (date: Dayjs | null) => {
    setEndDate(date);
  };

  return {
    businessName,
    role,
    location,
    startDate,
    endDate,
    description,
    isVisible,
    setBusinessName,
    setRole,
    setLocation,
    setStartDate,
    setEndDate,
    setDescription,
    setIsVisible,
    onChangeBusinessName,
    onChangeRole,
    onChangeLocation,
    onChangeStartDate,
    onChangeEndDate,
    onChangeDescription,
  };
};

export default useExperienceFormState;
