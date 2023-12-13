import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useAllSkills from "./use-all-skills";
import useForm from "./use-form";
import { useState } from "react";

const FormContent = ({ setIsOpen }: Props) => {
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const allSkills = useAllSkills();
  const onSkillChange = (event: SelectChangeEvent) => {
    setSelectedSkillId(event.target.value);
  };

  const { onSubmitForm } = useForm({ setIsOpen, selectedSkillId });

  return (
    <form onSubmit={onSubmitForm}>
      <Select value={selectedSkillId} onChange={onSkillChange}>
        {allSkills &&
          allSkills.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
      </Select>
      <Button variant="outlined" type="submit">
        Confirmar
      </Button>
    </form>
  );
};

export interface Props {
  setIsOpen: (arg0: boolean) => void;
}
export default FormContent;
