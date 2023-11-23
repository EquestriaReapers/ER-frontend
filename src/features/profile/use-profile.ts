import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "./services/profile.service";
import { Profile } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";

export default function useProfile(id: number) {
  const [profile, setProfile] = useState<Profile | null>(null);

  const { token } = useAuthState();

  const getProfile = useCallback(async () => {
    try {
      if (!token || !id) return;
      const data = await fetchOneProfile(token, id);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }, [token, id, setProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return profile;
}
