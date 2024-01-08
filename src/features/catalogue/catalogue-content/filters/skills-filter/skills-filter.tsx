import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useSkillsSuggestions from "./use-skills-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";
import { Checkbox } from "@mui/material";
import {
  filterDescriptionStyles,
  selectedSkillsBox,
  skillChipStyles,
  skillFilterTitleTypography,
  skillsFilterBox,
} from "./styles";

const SkillsFilter = () => {
  const {
    selectedSkills,
    setSelectedSkills,
    isExclusiveSkills,
    setIsExclusiveSkills,
  } = useCatalogueContext();

  const addSkill = useCallback(
    (newSkill: string) => {
      if (selectedSkills.includes(newSkill)) return;
      setSelectedSkills((prev) => [...prev, newSkill]);
    },
    [selectedSkills, setSelectedSkills]
  );

  const removeSkill = useCallback(
    (removedSkill: string) => {
      setSelectedSkills((prev) =>
        prev.filter((skill) => skill !== removedSkill)
      );
    },
    [setSelectedSkills]
  );

  const onSelectSkill = useCallback(
    (option: Option) => {
      addSkill(option.label);
    },
    [addSkill]
  );

  const useFilteredSkillsSuggestions =
    getFilteredSkillsSuggestionsClousure(selectedSkills);

  return (
    <Box sx={skillsFilterBox}>
      <Typography sx={skillFilterTitleTypography}>Habilidades</Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Buscar habilidades"
        useOptions={useFilteredSkillsSuggestions}
        onSelectOption={onSelectSkill}
        onCreateNewOption={() => {}}
        blurTextOnSelect={true}
      />
      <Box sx={selectedSkillsBox}>
        {selectedSkills.map((skill) => (
          <Chip
            deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
            color="primary"
            key={skill}
            label={skill}
            onDelete={() => {
              removeSkill(skill);
            }}
            sx={skillChipStyles}
          />
        ))}
      </Box>
      <Box sx={filterDescriptionStyles}>
        <Checkbox
          checked={isExclusiveSkills}
          onChange={(check) => {
            setIsExclusiveSkills(check.target.checked);
          }}
          inputProps={{ "aria-label": "Checkbox" }}
        />
        <Typography>
          Mostrar egresados que tienen todas estas habilidades
        </Typography>
      </Box>
    </Box>
  );
};

/* Jutsu Prohibido 🙏:
  Tecnica secreta de construccion de hooks por 
  composicion programatica 💀
 */
function getFilteredSkillsSuggestionsClousure(excludedSkills: string[]) {
  return (name?: string | null): Option[] => {
    return useSkillsSuggestions(name || "", excludedSkills);
  };
}

export default SkillsFilter;
