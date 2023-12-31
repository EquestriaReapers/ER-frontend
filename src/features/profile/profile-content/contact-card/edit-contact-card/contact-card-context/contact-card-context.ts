import { createContext } from "react";
import { ContactMethod, Lenguage } from "core/profiles/types";

const ContactCardContext = createContext<ContactCardContextI>({
  profileId: 0,
  countryResidence: "",
  website: "",
  languagues: [],
  contactMethods: [],
  fetchProfile: () => new Promise(() => {}),
  loading: false,
  setLoading: () => {},
});

export interface ContactCardContextI {
  profileId: number;
  countryResidence: string;
  website: string;
  languagues: Lenguage[];
  contactMethods: ContactMethod[];
  fetchProfile: () => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default ContactCardContext;
