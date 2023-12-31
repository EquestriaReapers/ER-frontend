import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { FormTitleStyles } from "../styles";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import useAllLocations from "./use-all-locations";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import useUpdateLocation from "./use-add-location";

const LocationContent = () => {
  const [loading, setLoading] = useState(false);
  const updateLocation = useUpdateLocation({ setLoading });

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <FmdGoodIcon
          sx={{
            fontSize: "16px",
          }}
        />
        <Typography sx={FormTitleStyles}>Ubicación</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AutoCompleteFieldComponent
          sx={{ width: "100%", marginBottom: "16px" }}
          disabled={loading}
          debounceTime={350}
          useOptions={useLocationsSuggestions}
          label="Buscar Habilidades"
          onSelectOption={(option: Option) => {
            updateLocation(option.label);
          }}
          onCreateNewOption={() => {}}
          allowNewUserOptions={false}
        />
      </Box>
    </div>
  );
};

function useLocationsSuggestions(name?: string | null): Option[] {
  const allLocations = useAllLocations(name || "");
  console.log(allLocations);

  if (!allLocations?.length) return [];

  return allLocations.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Option {
  value: number;
  label: string;
}

const opcionesMock: Option[] = [
  { value: 1, label: "gay1" },
  { value: 2, label: "gay2" },
  { value: 3, label: "gay3" },
];

export default LocationContent;
