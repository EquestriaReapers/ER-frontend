import React, { useEffect, useState } from "react";
import ContactCardContext, {
  LanguagueType,
  LocalLanguague,
} from "./contact-card-context";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { Language } from "core/profiles/types";
import { OptionLanguage } from "./types";
import useAllLanguages from "./use-all-language";

export const ContactCardContextProvider = ({
  children,
  isOpen,
  setIsOpen,
}: Props) => {
  const { profile, profileId, fetchProfile } = useProfileContext();
  const [loading, setLoading] = useState(false);
  const [basicData, setBasicData] = useState({
    countryResidence: "",
    website: "",
  });
  const [newLanguagues, setNewLanguagues] = useState<LocalLanguague[]>([]); // TODO: change to newLanguages
  const [deletedLanguaguesIds, setDeletedLanguaguesIds] = useState<number[]>(
    []
  );

  const _languageProfile = profile.languageProfile || [];
  const _languaguesWithoutDeleted: LocalLanguague[] = _languageProfile
    .map((languague: Language) => ({
      languagueId: languague.id,
      level: languague.level,
      type: LanguagueType.Online,
    }))
    .filter((language) => {
      return !deletedLanguaguesIds.includes(language.languagueId);
    });

  useEffect(() => {
    setBasicData({
      countryResidence: profile.countryResidence || "",
      website: profile.website || "",
    });
  }, [profile.countryResidence, profile.website]);

  const _languages: LocalLanguague[] = [
    ..._languaguesWithoutDeleted,
    ...newLanguagues,
  ];

  const lenguagueOptions = useLanguagesSuggestions("");

  const contextValue = {
    profileId,
    basicData,
    languages: _languages,
    contactMethods: profile.contactMethods || [],
    fetchProfile,
    loading,
    setLoading,
    isOpen,
    setIsOpen,
    setBasicData,
    setDeletedLanguaguesIds,
    deletedLanguaguesIds,
    setNewLanguagues,
    newLanguagues,
    lenguagueOptions,
  };

  return (
    <ContactCardContext.Provider value={contextValue}>
      {children}
    </ContactCardContext.Provider>
  );
};

function useLanguagesSuggestions(name?: string | null): OptionLanguage[] {
  const allLanguages = useAllLanguages(name || "");

  if (!allLanguages?.length) return [];

  return allLanguages.map((item) => {
    return { value: +item.id, label: item.name };
  });
}

export interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default ContactCardContextProvider;
