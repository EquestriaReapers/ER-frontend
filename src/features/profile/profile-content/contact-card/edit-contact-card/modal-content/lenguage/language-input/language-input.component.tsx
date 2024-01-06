import { Box } from "@mui/material";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";
import SelectComponent from "components/select-component";
import { useCallback } from "react";

const LanguageInput = ({ value, onChange, disabled }: Props) => {
  const { loading, lenguagueOptions } = useContactCardContext();

  const _onChange = useCallback(
    (value: number | string) => {
      onChange(+value);
    },
    [onChange]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        width: "100%",
        flex: 1,
      }}
    >
      <SelectComponent
        disabled={loading || disabled}
        options={lenguagueOptions}
        label="Idioma"
        value={value}
        onChange={_onChange}
      />
    </Box>
  );
};

interface Props {
  value: number | null;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export default LanguageInput;
