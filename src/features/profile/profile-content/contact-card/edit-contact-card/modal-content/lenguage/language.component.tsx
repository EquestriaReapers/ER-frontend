import { Box, Typography } from "@mui/material";
import {
  FormTitleStyles,
  boxContentStyles,
  iconTextStyles,
  textfieldStyles,
} from "../styles";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageInput from "./language-input/language-input.component";
import { useState } from "react";
import SelectComponent from "components/select-component";

const Language = () => {
  const [language, setlanguage] = useState("");
  const [nivel, setNivel] = useState("");
  const disabled = false;

  return (
    <div>
      <Box sx={iconTextStyles}>
        <TranslateIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Idioma</Typography>
      </Box>

      <Box sx={boxContentStyles}>
        <Box sx={textfieldStyles}>
          <LanguageInput
            disabled={disabled}
            value={language}
            onChange={function (value: string): void {
              setlanguage(value);
            }}
          />
        </Box>
        <SelectComponent
          disabled={disabled}
          options={[
            { value: "1", label: "Basico" },
            { value: "2", label: "Intermedio" },
            { value: "3", label: "Avanzado" },
          ]}
          label="Nivel"
          value={nivel}
          onChange={function (value: string): void {
            setNivel(value);
          }}
        />
      </Box>
    </div>
  );
};

export default Language;
