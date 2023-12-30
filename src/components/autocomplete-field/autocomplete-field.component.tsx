import { TextField } from "@mui/material";
import { FunctionComponent, SyntheticEvent, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { debounce } from "lodash";

const filter = createFilterOptions<Option>();

const DEFAULT_DEBOUNCE_TIME = 350;

const AutoCompleteFieldComponent: FunctionComponent<Props> = ({
  sx,
  label,
  disabled,
  debounceTime,
  useOptions,
  onSelectOption,
  onCreateNewOption,
  allowNewUserOptions,
  value,
}) => {
  const [currentText, setCurrentText] = useState("");
  const options = useOptions(currentText);

  const debouncedSetCurrentText = debounce((value: string) => {
    setCurrentText(value);
  }, debounceTime || DEFAULT_DEBOUNCE_TIME);

  return (
    <Autocomplete
      value={value || null}
      sx={sx}
      disablePortal
      disabled={disabled}
      options={options}
      onInputChange={(event) => {
        if (!event) return;
        const target = event.target as unknown as HTMLInputElement;
        debouncedSetCurrentText(target.value || "");
      }}
      onChange={(_: SyntheticEvent<Element, Event>, option: Option | null) => {
        if (!option?.value) return;

        if (option.isNew) {
          onCreateNewOption?.(option);
          return;
        }

        onSelectOption?.(option);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(
          (option) => inputValue.toLowerCase() === option.label.toLowerCase()
        );

        if (allowNewUserOptions) {
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              isNew: true,
              value: inputValue,
              label: `Agregar "${inputValue}"`,
            });
          }
        }

        return filtered;
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export type Option = {
  value: string | number | null;
  label: string;
  isNew?: boolean;
};

export interface Props {
  sx: Record<string, string | number | null>;
  disabled?: boolean;
  debounceTime?: number;
  useOptions: (text?: string | null) => Option[];
  label?: string;
  onSelectOption(option: Option): void;
  onCreateNewOption(option: Option): void;
  allowNewUserOptions?: boolean;
  value?: Option;
}

export default AutoCompleteFieldComponent;
