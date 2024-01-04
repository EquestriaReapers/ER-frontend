import { Box } from "@mui/material";
import useAllLanguages from "./use-all-language";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";
import SelectComponent from "components/select-component";

const LanguageInput = ({ value, onChange, disabled }: Props) => {
  const { loading } = useContactCardContext();
  const options = useLanguagesSuggestions("");

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
        options={options}
        label="Idioma"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

function useLanguagesSuggestions(name?: string | null): Option[] {
  const allLanguages = useAllLanguages(name || "");

  if (!allLanguages?.length) return [];

  return allLanguages.map((item) => {
    return { value: item.id + "", label: item.name };
  });
}

export interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default LanguageInput;
