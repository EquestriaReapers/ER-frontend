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
import { Skill } from "core/profiles/types";
import ShowSkills from "./show-profile-skills/show-skills";

const FormContent = ({ setIsOpen, currentProfileSkills }: Props) => {
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
      <Typography sx={{ fontWeight: "600", padding: "12px 0px 12px 0px" }}>
        Nueva habilidad
      </Typography>

      <form onSubmit={onSubmitForm}>
        <Box sx={{ display: "flex" }}>
          <TextField
            placeholder="Ej. Desarrollador de software"
            sx={{ width: "100%", padding: "12px 12px 12px 0px" }}
          />

          <Select value={selectedSkillId} onChange={onSkillChange}>
            {allSkills &&
              allSkills.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
          </Select>
        </Box>

        <Typography
          sx={{
            fontWeight: "600",
          }}
        >
          Habilidades
        </Typography>
        <ShowSkills skills={currentProfileSkills} />
        <Button sx={buttonStyle} type="submit">
          Guardar Cambios
        </Button>
      </form>
    </Box>
  );
};

export interface Props {
  setIsOpen: (arg0: boolean) => void;
  currentProfileSkills: Skill[];
}
export default FormContent;
