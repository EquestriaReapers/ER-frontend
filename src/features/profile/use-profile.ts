import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "./services/profile/fetch-one-profile.service";
import { Profile } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";
import { useErrorToast } from "hooks/use-error-toast";

export default function useProfile(id: number | null) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  const fetchProfile = useCallback(async () => {
    try {
      if (!token || !id) return;
      const data = await fetchOneProfile(token, id);
      setProfile(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [token, id, showErrorToast]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, fetchProfile };
}
