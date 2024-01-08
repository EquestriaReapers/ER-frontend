import { Box } from "@mui/material";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";
import SelectComponent from "components/select-component";
import { useCallback, useMemo } from "react";
import { LocalLanguague } from "../../../contact-card-context/contact-card-context";
import { OptionLanguage } from "../../../contact-card-context/types";

const LanguageInput = ({ value, onChange, disabled }: Props) => {
  const { loading, lenguagueOptions, languages } = useContactCardContext();

  const _onChange = useCallback(
    (value: number | string) => {
      onChange(+value);
    },
    [onChange]
  );

  const _availableOptionsLanguagues = useFilteredLanguagues(
    lenguagueOptions,
    languages
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
        options={_availableOptionsLanguagues}
        label="Idioma"
        value={value || ""}
        onChange={_onChange}
      />
    </Box>
  );
};

function useFilteredLanguagues(
  lenguagueOptions: OptionLanguage[],
  currentLanguagues: LocalLanguague[]
) {
  const filteredLanguagues = useMemo(() => {
    const _lenguagueOptions = [...lenguagueOptions];
    currentLanguagues.forEach((currentLanguague) => {
      const _currentLanguague = lenguagueOptions.find(
        (option) => +option.value === currentLanguague.languagueId
      );
      if (!_currentLanguague) return;

      const currentLanguagueIndex = _lenguagueOptions.findIndex(
        (option) => +option.value === currentLanguague.languagueId
      );

      if (currentLanguagueIndex === -1) return;
      _lenguagueOptions.splice(currentLanguagueIndex, 1);
    });
    return _lenguagueOptions;
  }, [lenguagueOptions, currentLanguagues]);

  return filteredLanguagues;
}

interface Props {
  value: number | undefined;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export default LanguageInput;
