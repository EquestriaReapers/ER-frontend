import React, { useEffect, useState } from "react";
import ContactCardContext from "./contact-card-context";
import useProfileContext from "features/profile/profile-context/use-profile-context";

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

  useEffect(() => {
    setBasicData({
      countryResidence: profile.countryResidence || "",
      website: profile.website || "",
    });
  }, [profile.countryResidence, profile.website]);

  const contextValue = {
    profileId,
    basicData,
    languagues: [],
    contactMethods: profile.contactMethods || [],
    fetchProfile,
    loading,
    setLoading,
    isOpen,
    setIsOpen,
    setBasicData,
  };

  return (
    <ContactCardContext.Provider value={contextValue}>
      {children}
    </ContactCardContext.Provider>
  );
};

export interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default ContactCardContextProvider;
