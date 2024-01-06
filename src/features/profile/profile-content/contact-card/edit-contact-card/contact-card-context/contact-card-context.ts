import { Dispatch, SetStateAction, createContext } from "react";
import { ContactMethod } from "core/profiles/types";
import { OptionLanguage } from "./types";

const ContactCardContext = createContext<ContactCardContextI>({
  profileId: 0,
  basicData: {
    countryResidence: "",
    website: "",
  },
  languages: [],
  contactMethods: [],
  fetchProfile: () => new Promise(() => {}),
  loading: false,
  setLoading: () => {},
  isOpen: false,
  setIsOpen: () => {},
  setBasicData: () => {},
  setDeletedLanguaguesIds: () => {},
  deletedLanguaguesIds: [],
  newLanguagues: [],
  setNewLanguagues: () => {},
  lenguagueOptions: [],
});

export interface ContactCardContextI {
  profileId: number;
  basicData: BasicDataFormState;
  languages: LocalLanguague[];
  contactMethods: ContactMethod[];
  fetchProfile: () => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setBasicData: (basicData: BasicDataFormState) => void;
  setDeletedLanguaguesIds: Dispatch<SetStateAction<number[]>>;
  deletedLanguaguesIds: number[];
  newLanguagues: LocalLanguague[];
  setNewLanguagues: Dispatch<SetStateAction<LocalLanguague[]>>;
  lenguagueOptions: OptionLanguage[];
}

export interface BasicDataFormState {
  countryResidence: string;
  website: string;
}

export interface LocalLanguague {
  languagueId: number;
  level: string;
  type: LanguagueType;
}

export enum LanguagueType {
  Online = "online",
  Local = "local",
}

export default ContactCardContext;
