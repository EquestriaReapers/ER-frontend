import { Box, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import useAllSkills from "../use-all-skills";
import { Option } from "../../use-skill-form-state";
import useAddSkill from "../use-add-skill";
import useProfileContext from "../../../../../profile-context/use-profile-context";

const AddSkillField = () => {
  const { fetchProfile } = useProfileContext();
  const addSkill = useAddSkill({ fetchProfile });
  const skillsOptions = useSkillsOptions();

  return (
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
  );
};

function useSkillsOptions(): Option[] {
  const allSkills = useAllSkills();

  if (!allSkills?.length) return [];

  return allSkills.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

export default AddSkillField;
