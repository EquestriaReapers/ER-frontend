import { useState, ChangeEvent } from "react";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  return {
    name,
    description,
    setName,
    setDescription,
    onChangeName,
    onChangeDescription,
  };
};

export default useEditProfileFormState;
