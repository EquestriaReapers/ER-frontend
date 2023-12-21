import { createContext } from "react";
import { Profile } from "core/profiles/types";

const ProfileContext = createContext<ProfileContextI>({
  profile: {} as unknown as Profile,
  profileId: 0,
  fetchProfile: () => {},
});

export interface ProfileContextI {
  profile: Profile;
  profileId: number;
  fetchProfile: () => void;
}

export default ProfileContext;
