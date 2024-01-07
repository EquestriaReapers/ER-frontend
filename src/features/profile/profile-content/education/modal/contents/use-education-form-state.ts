import { useState, ChangeEvent } from "react";
import { Dayjs } from "dayjs";

const useEducationFormState = () => {
  const [principal, setPrincipal] = useState(Boolean);
  const [title, setTitle] = useState("");
  const [entity, setEntity] = useState("");
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const onChangePrincipal = () => {
    setPrincipal(!principal);
  };

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
    principal,
    title,
    entity,
    endDate,
    setPrincipal,
    setTitle,
    setEntity,
    setEndDate,
    onChangePrincipal,
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
  };
};

export default useEducationFormState;
