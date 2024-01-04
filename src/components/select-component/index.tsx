import { useCallback } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

const textFieldStyles = {
  width: "100%",
  display: "flex",
};

const SelectComponent = ({
  value,
  onChange,
  options,
  disabled,
  label,
}: Props) => {
  const onLocalChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      if (!event.target.value) return;
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <Box className={"inputContainer"}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel
          id="demo-simple-select-required-label"
          sx={{ width: "100%" }}
        >
          {label}
        </InputLabel>
        <Select
          disabled={disabled}
          sx={textFieldStyles}
          placeholder={label}
          label={label}
          value={value}
          onChange={onLocalChange}
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
      </FormControl>
    </Box>
  );
};

export interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
  label: string;
}

export default SelectComponent;
