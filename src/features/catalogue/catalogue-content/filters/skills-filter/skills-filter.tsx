import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useSkillsSuggestions from "./use-skills-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";

const SkillsFilter = () => {
  const { selectedSkills, setSelectedSkills } = useCatalogueContext();

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
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", mt: 2 }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "16px",
        }}
      >
        Habilidades
      </Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Buscar habilidades"
        useOptions={useFilteredSkillsSuggestions}
        onSelectOption={onSelectSkill}
        onCreateNewOption={onSelectSkill}
        blurTextOnSelect={true}
      />
      <Box>
        {selectedSkills.map((skill) => (
          <Chip
            deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
            color="primary"
            key={skill}
            label={skill}
            onDelete={() => {
              removeSkill(skill);
            }}
            sx={{
              borderRadius: "6px",
              backgroundColor: "#D9D9D9",
              color: "#303030",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              my: "4px",
              mx: "4px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

// Jutsu Prohibido 🙏: Tecnica secreta de construccion de hooks por composicion programatica 💀
function getFilteredSkillsSuggestionsClousure(excludedSkills: string[]) {
  return (name?: string | null): Option[] => {
    return useSkillsSuggestions(name || "", excludedSkills);
  };
}

export default SkillsFilter;
