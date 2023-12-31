import React from "react";
import ProfileContext from "./profile-context";
import { Profile } from "core/profiles/types";
import { useAuthState } from "hooks/use-auth-state";

export const ProfileContextProvider = ({
  children,
  profileId,
  profile,
  fetchProfile,
}: Props) => {
  const loggedUser = useAuthState().user;
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);

  const contextValue = {
    profile,
    fetchProfile,
    profileId,
    isEditable,
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
  fetchProfile: () => Promise<void>;
}

export default ProfileContextProvider;
