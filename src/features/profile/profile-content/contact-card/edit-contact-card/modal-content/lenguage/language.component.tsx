import { Box, Typography } from "@mui/material";
import {
  FormTitleStyles,
  itemBoxStyles,
  iconTextStyles,
  textfieldStyles,
  boxContentStyles,
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
import {
  DICTIONARY_LANGUAGUE_OPTIONS,
  LanguageLevel,
} from "core/profiles/types";
import SpinnerBlock from "components/spinner-block";

const Language = () => {
  const {
    languages,
    setDeletedLanguaguesIds,
    setNewLanguagues,
    loading,
    lenguagueOptions,
  } = useContactCardContext();
  const [language, setlanguage] = useState<number | "">("");
  const [nivel, setNivel] = useState<LanguageLevel | "">("");
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
          console.log("_previousNewLanguagues", _previousNewLanguagues);
          console.log("deletedLanguague", deletedLanguague);
          const newDeletedIndex = _previousNewLanguagues.findIndex(
            (item) => item.languagueId === deletedLanguague.languagueId
          );
          console.log("newDeletedIndex", newDeletedIndex);
          if (newDeletedIndex === -1) return _previousNewLanguagues;
          _previousNewLanguagues.splice(newDeletedIndex, 1);
          return _previousNewLanguagues;
        });
      }
    },
    [setDeletedLanguaguesIds, setNewLanguagues]
  );

  useEffect(() => {
    if (language === null || language === undefined || language === "") return;
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

    setlanguage("");
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
            value={language || undefined}
            onChange={(value: number) => {
              setlanguage(value);
            }}
          />
        </Box>
        <SelectComponent
          disabled={disabled}
          options={[
            {
              value: LanguageLevel.Bajo,
              label: DICTIONARY_LANGUAGUE_OPTIONS[LanguageLevel.Bajo],
            },
            {
              value: LanguageLevel.Intermedio,
              label: DICTIONARY_LANGUAGUE_OPTIONS[LanguageLevel.Intermedio],
            },
            {
              value: LanguageLevel.Alto,
              label: DICTIONARY_LANGUAGUE_OPTIONS[LanguageLevel.Alto],
            },
            {
              value: LanguageLevel.Nativo,
              label: DICTIONARY_LANGUAGUE_OPTIONS[LanguageLevel.Nativo],
            },
          ]}
          label="Nivel"
          value={nivel}
          onChange={(value: string | number) => {
            const _levelOption = (value + "") as LanguageLevel;
            setNivel(_levelOption);
          }}
        />
      </Box>
      <Box sx={itemBoxStyles}>
        {loading || !lenguagueOptions.length ? (
          <>
            <SpinnerBlock />
          </>
        ) : (
          languages.map((language) => (
            <LanguageItem
              onDelete={deleteLanguague}
              key={language.languagueId}
              item={language}
            />
          ))
        )}
      </Box>
    </div>
  );
};

export default Language;
