import { Box } from "@mui/material";
import { useState } from "react";
import useAllSkills from "./use-all-skills";
import { Option } from "./use-skill-form-state";
import useAddSkill from "./use-add-skill";
import useAddUnexistsSkill from "./use-add-unexists-skill";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";

const AddSkillField = () => {
  const [loading, setLoading] = useState(false);
  const addSkill = useAddSkill({ setLoading });
  const addUnexistsSkill = useAddUnexistsSkill({ setLoading });

  return (
    <Box sx={{ display: "flex" }}>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", marginBottom: "16px" }}
        disabled={loading}
        debounceTime={350}
        useOptions={useSkillsSuggestions}
        label="Buscar Habilidades"
        onSelectOption={(option: Option) => {
          addSkill(+option.value);
        }}
        onCreateNewOption={(option: Option) => {
          addUnexistsSkill(option.value + "");
        }}
        allowNewUserOptions={true}
      />
    </Box>
  );
};

function useSkillsSuggestions(name?: string | null): Option[] {
  const allSkills = useAllSkills(name || "");

  if (!allSkills?.length) return [];

  return allSkills.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

export default AddSkillField;
