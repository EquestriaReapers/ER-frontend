import { MenuItem, Button, Box, Typography, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useAllSkills from "./use-all-skills";
import useForm from "./use-form";
import { useState } from "react";
import {
  modalStyle,
  buttonStyle,
  boxButtonStyles,
  textFieldStyles,
  headerStyles,
  titleStyles,
} from "../../styles";

const FormContent = ({ setIsOpen }: Props) => {
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const allSkills = useAllSkills();
  const onSkillChange = (event: SelectChangeEvent) => {
    setSelectedSkillId(event.target.value);
  };

  const { onSubmitForm } = useForm({ setIsOpen, selectedSkillId });

  return (
    <Box>
      <Typography sx={titleStyles}>Gestionar Habilidades</Typography>
      <Typography>
        En esta sección podrás modificar las habilidades tanto blandas como
        duras que muestres al público
      </Typography>
      <Typography sx={{ fontWeight: "600" }}>Nueva habilidad</Typography>
      <TextField value="newSkill" />

      <form onSubmit={onSubmitForm}>
        <Select value={selectedSkillId} onChange={onSkillChange}>
          {allSkills &&
            allSkills.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
        </Select>

        <Typography
          sx={{
            fontWeight: "600",
          }}
        >
          Habilidades
        </Typography>
        <Button sx={buttonStyle} type="submit">
          Guardar Cambios
        </Button>
      </form>
    </Box>
  );
};

export interface Props {
  setIsOpen: (arg0: boolean) => void;
}
export default FormContent;
