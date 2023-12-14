import { MenuItem, Button, Box, Typography, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useAllSkills from "./use-all-skills";
import useForm from "./use-form";
import { useState } from "react";
import { buttonStyle, titleStyles } from "../../styles";
import { Skill } from "core/profiles/types";
import ShowSkills from "./show-profile-skills/show-skills";

const FormContent = ({ setIsOpen, currentProfileSkills }: Props) => {
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const allSkills = useAllSkills();
  const onSkillChange = (event: SelectChangeEvent) => {
    setSelectedSkillId(event.target.value);
  };

  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [selectOptions, setSelectOptions] = useState<string[]>([
    "Javascript",
    "React",
  ]);
  const [isCustomInput, setIsCustomInput] = useState(false);
  const { onSubmitForm } = useForm({ setIsOpen, selectedSkillId });

  const handleAddSkill = () => {
    if (newSkill !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
      setSelectOptions([...selectOptions, newSkill]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const selectedOption = e.target.value as string;
    if (selectedOption === "addMoreOptions") {
      setIsCustomInput(true);
    } else {
      setIsCustomInput(false);
      if (selectedOption !== "") {
        // Agregar la opción seleccionada como nueva habilidad
        setSkills([...skills, selectedOption]);
      }
    }
  };

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

          
          <Select
            value=""
            onChange={handleSelectChange}
            sx={{ width: "100%", marginBottom: "16px" }}
          >
            <MenuItem value={selectedSkillId} disabled>
              Seleccione una opción
            </MenuItem>
            {selectOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
            <MenuItem value="addMoreOptions">Agregar más opciones</MenuItem>
          </Select>




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
