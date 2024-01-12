import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useLocationsSuggestions from "./use-locations-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";
import {
  filterDescriptionStyles,
  locationChipStyles,
  locationFilterTitleTypography,
  locationsFilterBox,
  selectedLocationsBox,
} from "./styles";

const LocationsFilter = () => {
  const { selectedLocations, setSelectedLocations } = useCatalogueContext();

  const addLocation = useCallback(
    (newLocation: string) => {
      if (selectedLocations.includes(newLocation)) return;
      setSelectedLocations((prev) => [...prev, newLocation]);
    },
    [selectedLocations, setSelectedLocations]
  );

  const removeLocation = useCallback(
    (removedLocation: string) => {
      setSelectedLocations((prev) =>
        prev.filter((location) => location !== removedLocation)
      );
    },
    [setSelectedLocations]
  );

  const onSelectLocation = useCallback(
    (option: Option) => {
      addLocation(option.label);
    },
    [addLocation]
  );

  const useFilteredLocationsSuggestions =
    getFilteredLocationsSuggestionsClousure(selectedLocations);

  return (
    <Box sx={locationsFilterBox}>
      <Typography sx={locationFilterTitleTypography}>Localizaciones</Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar localizaciones"
        useOptions={useFilteredLocationsSuggestions}
        onSelectOption={onSelectLocation}
        onCreateNewOption={() => {}}
        blurTextOnSelect={true}
      />

      <Box sx={selectedLocationsBox}>
        {selectedLocations.map((location) => (
          <Chip
            deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
            color="primary"
            key={location}
            label={location}
            onDelete={() => {
              removeLocation(location);
            }}
            sx={locationChipStyles}
          />
        ))}
      </Box>
      <Box sx={filterDescriptionStyles}>
        <Typography>
          Se mostraran los egresados que tengan 1 de las localizaciones
          seleccionadas
        </Typography>
      </Box>
    </Box>
  );
};

/* Jutsu Prohibido 🙏:
  Tecnica secreta de construccion de hooks por 
  composicion programatica 💀
 */
function getFilteredLocationsSuggestionsClousure(excludedLocations: string[]) {
  return (name?: string | null): Option[] => {
    return useLocationsSuggestions(name || "", excludedLocations);
  };
}

export default LocationsFilter;
