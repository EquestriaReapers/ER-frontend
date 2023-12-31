import { createContext } from "react";
import { ContactMethod, Lenguage } from "core/profiles/types";

const ContactCardContext = createContext<ContactCardContextI>({
  profileId: 0,
  basicData: {
    countryResidence: "",
    website: "",
  },
  languagues: [],
  contactMethods: [],
  fetchProfile: () => new Promise(() => {}),
  loading: false,
  setLoading: () => {},
  isOpen: false,
  setIsOpen: () => {},
  setBasicData: () => {},
});

export interface ContactCardContextI {
  profileId: number;
  basicData: BasicDataFormState;
  languagues: Lenguage[];
  contactMethods: ContactMethod[];
  fetchProfile: () => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setBasicData: (basicData: BasicDataFormState) => void;
}

export interface BasicDataFormState {
  countryResidence: string;
  website: string;
}

export default ContactCardContext;
