import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useLanguaguesSuggestions from "./use-languagues-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";
import { Checkbox } from "@mui/material";

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
          fontFamily: "inter",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "16px",
          mb: 2,
        }}
      >
        Lenguajes
      </Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar lenguajes"
        useOptions={useFilteredLanguaguesSuggestions}
        onSelectOption={onSelectLanguague}
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
          {selectedLanguagues.map((languague) => (
            <Chip
              deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
              color="primary"
              key={languague}
              label={languague}
              onDelete={() => {
                removeLanguague(languague);
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
                fontFamily: "inter",
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
            checked={isExclusiveLanguague}
            onChange={(check) => {
              setIsExclusiveLanguague(check.target.checked);
            }}
            inputProps={{ "aria-label": "Checkbox" }}
          />
          <Typography>Todos los lenguajes son excluyentes</Typography>
        </Box>
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
