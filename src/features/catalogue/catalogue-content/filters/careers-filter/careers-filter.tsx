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
import {
  careerChipStyles,
  careerFilterTitleTypography,
  careersFilterBox,
  filterDescriptionStyles,
  selectedCareersBox,
} from "./styles";

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
    <Box sx={careersFilterBox}>
      <Typography sx={careerFilterTitleTypography}>Carreras</Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar carrera"
        useOptions={useFilteredCareersSuggestions}
        onSelectOption={onSelectCareer}
        onCreateNewOption={() => {}}
        blurTextOnSelect={true}
      />

      <Box sx={selectedCareersBox}>
        {selectedCareers.map((career) => (
          <Chip
            deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
            color="primary"
            key={career}
            label={getCareerLabelWithValue(career, careersOptions)}
            onDelete={() => {
              removeCareer(career);
            }}
            sx={careerChipStyles}
          />
        ))}
      </Box>
      <Box sx={filterDescriptionStyles}>
        <Typography>
          Se mostraran los egresados que tengan 1 de las carreras seleccionadas
        </Typography>
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
