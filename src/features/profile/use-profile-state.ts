import { Profile } from "core/profiles/types";
import { useState } from "react";

export default function useProfileState() {
  const [profile, setProfile] = useState<Profile | null>(null);

  return {
    profile,
    setProfile,
  };
}
