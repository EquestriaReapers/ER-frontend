import { createContext } from "react";
import { Profile } from "core/profiles/types";

const ProfileContext = createContext<ProfileContextI>({
  profile: {} as unknown as Profile,
  profileId: 0,
  fetchProfile: () => {},
  isEditable: false,
});

export interface ProfileContextI {
  profile: Profile;
  profileId: number;
  fetchProfile: () => void;
  isEditable: boolean;
}

export default ProfileContext;
