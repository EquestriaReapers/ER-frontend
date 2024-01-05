import { useCallback } from "react";
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { FormTitleStyles } from "../../styles";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import useAllLocations from "./use-all-locations";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";
import { SelectChangeEvent } from "@mui/material";

const textFieldStyles = {
  width: "100%",
  display: "flex",
};

const LocationInput = ({ value, onChange }: Props) => {
  const { loading } = useContactCardContext();
  const options = useLocationsSuggestions("");

  if (options.find((option) => option.value === value) === undefined) {
    options.push({
      value,
      label: value,
    });
  }

  const onChangeLocation = useCallback(
    (event: SelectChangeEvent<string>) => {
      if (!event.target.value) return;
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <FmdGoodIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Ubicación</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Select
          disabled={loading}
          sx={textFieldStyles}
          value={value}
          onChange={onChangeLocation}
          MenuProps={{
            style: {
              maxHeight: 300,
            },
          }}
          input={<OutlinedInput label="Name" />}
        >
          {options.map(({ label, value: _value }: Option) => (
            <MenuItem selected={value === _value} key={_value} value={_value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
};

function useLocationsSuggestions(name?: string | null): Option[] {
  const allLocations = useAllLocations(name || "");

  if (!allLocations?.length) return [];

  return allLocations.map((item) => {
    return { value: item.name, label: item.name };
  });
}

export interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default LocationInput;
