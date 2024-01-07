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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 2,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "16px",
          mb: 2,
        }}
      >
        Habilidades
      </Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Buscar habilidades"
        useOptions={useFilteredSkillsSuggestions}
        onSelectOption={onSelectSkill}
        onCreateNewOption={() => {}}
        blurTextOnSelect={true}
      />
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            flex: 1,
            my: 1,
          }}
        >
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
                backgroundColor: {
                  xs: "#D9D9D9",
                  sm: "#D9D9D9",
                  md: "#D9D9D9",
                  lg: "#D9D9D9",
                },
                color: "#303030",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "250px",
                  lg: "100%",
                },
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            witdh: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={isExclusiveSkills}
            onChange={(check) => {
              setIsExclusiveSkills(check.target.checked);
            }}
            inputProps={{ "aria-label": "Checkbox" }}
          />
          <Typography>Todas las habilidades son excluyentes</Typography>
        </Box>
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