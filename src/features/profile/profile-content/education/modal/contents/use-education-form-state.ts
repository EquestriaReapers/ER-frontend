import { useState, ChangeEvent, useCallback } from "react";
import { Dayjs } from "dayjs";

const useEducationFormState = () => {
  const [principal, setPrincipal] = useState<null | boolean>(false);
  const [title, setTitle] = useState("");
  const [entity, setEntity] = useState("");
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);
  const onChangeEntity = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEntity(event.target.value);
  }, []);
  const onChangeEndDate = useCallback((date: Dayjs | null) => {
    setEndDate(date);
  }, []);

  return {
    principal,
    title,
    entity,
    endDate,
    setPrincipal,
    setTitle,
    setEntity,
    setEndDate,
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
  };
};

export default useEducationFormState;
