import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useLocationsSuggestions from "./use-locations-suggestions";
import useCatalogueContext from "../../catalogue-context/use-catalogue-context";

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
        Localizaciones
      </Typography>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", background: "white" }}
        label="Agregar localizaciones"
        useOptions={useFilteredLocationsSuggestions}
        onSelectOption={onSelectLocation}
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
          {selectedLocations.map((location) => (
            <Chip
              deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
              color="primary"
              key={location}
              label={location}
              onDelete={() => {
                removeLocation(location);
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
          <Typography>
            Las localizaciones no son excluyentes, permite cadenas abiertas
          </Typography>
        </Box>
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
