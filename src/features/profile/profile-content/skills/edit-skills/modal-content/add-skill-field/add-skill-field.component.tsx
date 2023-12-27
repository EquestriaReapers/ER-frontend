import { Box, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useAllSkills from "../use-all-skills";
import { Option } from "../../use-skill-form-state";
import useAddSkill from "../use-add-skill";
import useProfileContext from "../../../../../profile-context/use-profile-context";
import useAddNewSkill from "../use-add-new-skill";

const filter = createFilterOptions<Option>();

const AddSkillField = () => {
  const { fetchProfile } = useProfileContext();
  const addSkill = useAddSkill({ fetchProfile });
  const addNewSkill = useAddNewSkill({ fetchProfile });
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
          if (option?.value) {
            if (option.value >= 0) {
              addSkill(option.value);
            } else {
              console.log(`probando new skill: "${option.label}"`);
              addNewSkill(option.label);
            }
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.label
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              value: -1,
              label: `${inputValue}`,
            });
          }

          return filtered;
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
