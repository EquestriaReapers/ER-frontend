import { Box, Typography } from "@mui/material";
import {
  FormTitleStyles,
  boxContentStyles,
  iconTextStyles,
  textfieldStyles,
} from "../styles";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageInput from "./language-input/language-input.component";
import { useCallback, useEffect, useState } from "react";
import SelectComponent from "components/select-component";
import useContactCardContext from "../../contact-card-context/use-contact-card-context";
import LanguageItem from "./language-item/language-item.component";
import {
  LanguagueType,
  LocalLanguague,
} from "../../contact-card-context/contact-card-context";

const Language = () => {
  const { languages, setDeletedLanguaguesIds, setNewLanguagues } =
    useContactCardContext();
  const [language, setlanguage] = useState<number | null>(null);
  const [nivel, setNivel] = useState("");
  const disabled = false;

  const deleteLanguague = useCallback(
    (deletedLanguague: LocalLanguague) => {
      if (deletedLanguague.type === LanguagueType.Online) {
        setDeletedLanguaguesIds((prevLanguaguesDeletedIds: number[]) => [
          ...prevLanguaguesDeletedIds,
          deletedLanguague.languagueId,
        ]);
      } else {
        setNewLanguagues((previousNewLanguagues: LocalLanguague[]) => {
          const _previousNewLanguagues = [...previousNewLanguagues];
          const newDeletedId = _previousNewLanguagues.findIndex(
            (item) => item.languagueId === deletedLanguague.languagueId
          );
          if (newDeletedId === -1) return _previousNewLanguagues;
          _previousNewLanguagues.splice(newDeletedId, 1);
          return _previousNewLanguagues;
        });
      }
    },
    [setDeletedLanguaguesIds, setNewLanguagues]
  );

  useEffect(() => {
    if (language === null) return;
    if (!nivel) return;

    const newLanguague: LocalLanguague = {
      languagueId: language,
      level: nivel,
      type: LanguagueType.Local,
    };

    if (languages.length) {
      const languagueConflict = languages.find(
        (item) => item.languagueId === newLanguague.languagueId
      );
      if (languagueConflict) return;
    }

    setlanguage(null);
    setNivel("");
    setNewLanguagues((prevNewLanguagues: LocalLanguague[]) => [
      ...prevNewLanguagues,
      newLanguague,
    ]);
  }, [language, languages, nivel, setNewLanguagues]);

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
            onChange={(value: number) => {
              setlanguage(value);
            }}
          />
        </Box>
        <SelectComponent
          disabled={disabled}
          options={[
            { value: "basico", label: "Basico" },
            { value: "intermedio", label: "Intermedio" },
            { value: "avanzado", label: "Avanzado" },
          ]}
          label="Nivel"
          value={nivel}
          onChange={(value: string | number) => {
            setNivel(value + "");
          }}
        />
      </Box>
      <Box sx={boxContentStyles}>
        {languages.map((language) => (
          <LanguageItem onDelete={deleteLanguague} item={language} />
        ))}
      </Box>
    </div>
  );
};

export default Language;
