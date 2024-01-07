import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useCareersSuggestions from "./use-careers-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";
import useAllCareers from "./use-all-careers";
import { CareersOption } from "core/profiles/get-careers-options.service";

const CareersFilter = () => {
  const careersOptions = useAllCareers();
  const { selectedCareers, setSelectedCareers } = useCatalogueContext();

  const addCareer = useCallback(
    (newCareer: string) => {
      if (selectedCareers.includes(newCareer)) return;
      setSelectedCareers((prev) => [...prev, newCareer]);
    },
    [selectedCareers, setSelectedCareers]
  );

  const removeCareer = useCallback(
    (removedCareer: string) => {
      setSelectedCareers((prev) =>
        prev.filter((career) => career !== removedCareer)
      );
    },
    [setSelectedCareers]
  );

  const onSelectCareer = useCallback(
    (option: Option) => {
      addCareer("" + option.value);
    },
    [addCareer]
  );

  const useFilteredCareersSuggestions = getFilteredCareersSuggestionsClousure(
    selectedCareers,
    careersOptions
  );

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
        Carreras
      </Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar carrera"
        useOptions={useFilteredCareersSuggestions}
        onSelectOption={onSelectCareer}
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
          {selectedCareers.map((career) => (
            <Chip
              deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
              color="primary"
              key={career}
              label={getCareerLabelWithValue(career, careersOptions)}
              onDelete={() => {
                removeCareer(career);
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
          <Typography>Las carreras no son excluyentes</Typography>
        </Box>
      </Box>
    </Box>
  );
};

/* Jutsu Prohibido 🙏:
  Tecnica secreta de construccion de hooks por 
  composicion programatica 💀
 */
function getFilteredCareersSuggestionsClousure(
  excludedCareers: string[],
  optionsCareers: CareersOption[]
) {
  return (name?: string | null): Option[] => {
    return useCareersSuggestions(name || "", excludedCareers, optionsCareers);
  };
}

function getCareerLabelWithValue(
  career: string,
  careersOptions: CareersOption[]
) {
  return careersOptions.find((option) => option.value === career)?.label;
}

export default CareersFilter;
