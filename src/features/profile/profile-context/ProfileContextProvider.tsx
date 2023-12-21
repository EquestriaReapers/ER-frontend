import React from "react";
import ProfileContext from "./profile-context";
import { Profile } from "core/profiles/types";

export const ProfileContextProvider = ({
  children,
  profileId,
  profile,
  fetchProfile,
}: Props) => {
  const contextValue = {
    profile,
    fetchProfile,
    profileId,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export interface Props {
  children: React.ReactNode;
  profileId: number;
  profile: Profile;
  fetchProfile: () => void;
}

export default ProfileContextProvider;
