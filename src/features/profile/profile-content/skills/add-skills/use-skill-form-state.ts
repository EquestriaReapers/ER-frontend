import { useState, ChangeEvent } from "react";
import useAddSkillForm from "./modal-content/use-form";

export const useCreateNewSkillState = () => {
  const [newSkill, setNewSkill] = useState("");

  const onChangeNewSkill = (event: ChangeEvent<HTMLInputElement>) => {
    setNewSkill(event.target.value);
    console.log(event.target.value);
  };

  return {
    newSkill,
    setNewSkill,
    onChangeNewSkill,
  };
};

export const handleOptionSelected = (
  event: ChangeEvent<{}>,
  value: Option | null
) => {
  if (value) {
    const { onSubmitForm } = useAddSkillForm(value.value);
  }
};

export interface Option {
  value: number;
  label: string;
}
