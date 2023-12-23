import { useState, ChangeEvent } from "react";

export const useCreateNewSkillState = () => {
  const [newSkill, setNewSkill] = useState("");

  const onChangeNewSkill = (event: ChangeEvent<HTMLInputElement>) => {
    setNewSkill(event.target.value);
  };

  return {
    newSkill,
    setNewSkill,
    onChangeNewSkill,
  };
};

export interface Option {
  value: number;
  label: string;
}
