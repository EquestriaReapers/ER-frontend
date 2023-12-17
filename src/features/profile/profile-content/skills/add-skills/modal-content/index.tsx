import { Button, Box, Typography, TextField } from "@mui/material";
import useAllSkills from "./use-all-skills";
//import useForm from "./use-form";
import { useCallback, ChangeEvent, SyntheticEvent } from "react";
import { buttonStyle, titleStyles } from "../../../../styles";
import { useCreateNewSkillState, Option } from "../use-skill-form-state";
import { Skill } from "core/profiles/types";
import ShowSkills from "./show-modal-skills/show-skills";
import Autocomplete from "@mui/material/Autocomplete";
import useAddSkill from "../modal-content/use-add-skill";

const ModalContent = ({ setIsOpen, currentProfileSkills }: Props) => {
  const closeModal = useCloseModal(setIsOpen);

  const addSkill = useAddSkill();

  //const { onSubmitForm } = useForm({ setIsOpen });

  const skillsOptions = useSkillsOptions();

  /*const handleAddSkill = () => {
    if (newSkill !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
      setSelectOptions([...selectOptions, newSkill]);
    }
  };*/

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

      <form>
        <Box sx={{ display: "flex" }}>
          <Autocomplete
            sx={{ width: "100%", marginBottom: "16px" }}
            disablePortal
            id="combo-box-demo"
            options={skillsOptions}
            getOptionLabel={(option) => option.label}
            onChange={(
              _: SyntheticEvent<Element, Event>,
              option: Option | null
            ) => {
              if (option?.value) addSkill(option.value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Buscar Habilidades" />
            )}
          />
        </Box>

        <Typography
          sx={{
            fontWeight: "600",
          }}
        >
          Habilidades
        </Typography>
        <ShowSkills skills={currentProfileSkills} />
        <Button sx={buttonStyle} type="submit" onClick={closeModal}>
          Listo
        </Button>
      </form>
    </Box>
  );
};

function useCloseModal(setIsOpen: (open: boolean) => void) {
  return useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
}

function useSkillsOptions(): Option[] {
  const allSkills = useAllSkills();

  if (!allSkills?.length) return [];

  return allSkills.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Props {
  setIsOpen: (open: boolean) => void;
  currentProfileSkills: Skill[];
}

export default ModalContent;
