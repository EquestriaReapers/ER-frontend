import React, { useState } from "react";
import ContactCardContext from "./contact-card-context";
import { Profile } from "core/profiles/types";

export const ContactCardContextProvider = ({
  children,
  profileId,
  profile,
  fetchProfile,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const contextValue = {
    profileId,
    countryResidence: profile.countryResidence,
    website: "",
    languagues: profile.languageProfile,
    contactMethods: [],
    fetchProfile,
    loading,
    setLoading,
  };

  return (
    <ContactCardContext.Provider value={contextValue}>
      {children}
    </ContactCardContext.Provider>
  );
};

export interface Props {
  children: React.ReactNode;
  profileId: number;
  profile: Profile;
  fetchProfile: () => void;
}

export default ContactCardContextProvider;
