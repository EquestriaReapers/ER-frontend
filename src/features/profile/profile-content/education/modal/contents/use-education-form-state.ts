import { useState, ChangeEvent } from "react";
import { Dayjs } from "dayjs";

const useEducationFormState = () => {
  const [title, setTitle] = useState("");
  const [entity, setEntity] = useState("");
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeEntity = (event: ChangeEvent<HTMLInputElement>) => {
    setEntity(event.target.value);
  };
  const onChangeEndDate = (date: Dayjs | null) => {
    setEndDate(date);
  };

  return {
    title,
    entity,
    endDate,
    setTitle,
    setEntity,
    setEndDate,
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
  };
};

export default useEducationFormState;
