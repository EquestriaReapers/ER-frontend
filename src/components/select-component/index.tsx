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
}: Props<string | number>) => {
  const onLocalChange = useCallback(
    (event: SelectChangeEvent<string | number>) => {
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
          value={value === null ? undefined : value}
          onChange={onLocalChange}
          MenuProps={{
            style: {
              maxHeight: 300,
            },
          }}
          input={<OutlinedInput label="Name" />}
        >
          {options.map(({ label, value: _value }: Option<string | number>) => (
            <MenuItem selected={value === _value} key={_value} value={_value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export interface Option<T> {
  value: T;
  label: string;
}

interface Props<T> {
  value: T | undefined;
  options: Option<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  label: string;
}

export default SelectComponent;
