import { Box, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useAllSkills from "./use-all-skills";
import { Option } from "./use-skill-form-state";
import useAddSkill from "./use-add-skill";
import useAddUnexistsSkill from "./use-add-unexists-skill";
import { debounce } from "lodash";

const filter = createFilterOptions<Option>();

const AddSkillField = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const addSkill = useAddSkill({ setLoading });
  const addUnexistsSkill = useAddUnexistsSkill({ setLoading });
  const skillsOptions = useSkillsSuggestions(searchText);

  const debouncedSetSearchText = debounce((value: string) => {
    setSearchText(value);
  }, 350);

  return (
    <Box sx={{ display: "flex" }}>
      <Autocomplete
        sx={{ width: "100%", marginBottom: "16px" }}
        disablePortal
        id="combo-box-demo"
        disabled={loading}
        options={skillsOptions}
        onInputChange={(event) => {
          const text = event.target as unknown as HTMLInputElement;
          debouncedSetSearchText(text.value || "");
        }}
        onChange={(
          _: SyntheticEvent<Element, Event>,
          option: Option | null
        ) => {
          if (!option?.value) return;

          if (typeof option.value === "string") {
            // Create and asign new skill
            addUnexistsSkill(option.value);
            return;
          }

          // Asign existing skill
          addSkill(option.value);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue.toLowerCase() === option.label.toLowerCase()
          );

          if (inputValue !== "" && !isExisting) {
            filtered.push({
              value: inputValue,
              label: `Agregar "${inputValue}"`,
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

function useSkillsSuggestions(name: string): Option[] {
  const allSkills = useAllSkills(name);

  if (!allSkills?.length) return [];

  return allSkills.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

export default AddSkillField;
