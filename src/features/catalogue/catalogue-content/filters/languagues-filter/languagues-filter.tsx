import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useLanguaguesSuggestions from "./use-languagues-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";
import { Checkbox } from "@mui/material";
import {
  filterDescriptionStyles,
  languageChipStyles,
  languageFilterTitleTypography,
  languagesFilterBox,
  selectedLanguagesBox,
} from "./styles";

const LanguaguesFilter = () => {
  const {
    selectedLanguagues,
    setSelectedLanguagues,
    isExclusiveLanguague,
    setIsExclusiveLanguague,
  } = useCatalogueContext();

  const addLanguague = useCallback(
    (newLanguague: string) => {
      if (selectedLanguagues.includes(newLanguague)) return;
      setSelectedLanguagues((prev) => [...prev, newLanguague]);
    },
    [selectedLanguagues, setSelectedLanguagues]
  );

  const removeLanguague = useCallback(
    (removedLanguague: string) => {
      setSelectedLanguagues((prev) =>
        prev.filter((languague) => languague !== removedLanguague)
      );
    },
    [setSelectedLanguagues]
  );

  const onSelectLanguague = useCallback(
    (option: Option) => {
      addLanguague(option.label);
    },
    [addLanguague]
  );

  const useFilteredLanguaguesSuggestions =
    getFilteredLanguaguesSuggestionsClousure(selectedLanguagues);

  return (
    <Box sx={languagesFilterBox}>
      <Typography sx={languageFilterTitleTypography}>Lenguajes</Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar lenguajes"
        useOptions={useFilteredLanguaguesSuggestions}
        onSelectOption={onSelectLanguague}
        onCreateNewOption={() => {}}
        blurTextOnSelect={true}
      />
      <Box sx={selectedLanguagesBox}>
        {selectedLanguagues.map((languague) => (
          <Chip
            deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
            color="primary"
            key={languague}
            label={languague}
            onDelete={() => {
              removeLanguague(languague);
            }}
            sx={languageChipStyles}
          />
        ))}
      </Box>
      <Box sx={filterDescriptionStyles}>
        <Checkbox
          checked={isExclusiveLanguague}
          onChange={(check) => {
            setIsExclusiveLanguague(check.target.checked);
          }}
          inputProps={{ "aria-label": "Checkbox" }}
        />
        <Typography>
          Mostrar egresados que tienen todas estas localizaciones
        </Typography>
      </Box>
    </Box>
  );
};

/* Jutsu Prohibido 🙏:
  Tecnica secreta de construccion de hooks por 
  composicion programatica 💀
 */
function getFilteredLanguaguesSuggestionsClousure(
  excludedLanguagues: string[]
) {
  return (name?: string | null): Option[] => {
    return useLanguaguesSuggestions(name || "", excludedLanguagues);
  };
}

export default LanguaguesFilter;
