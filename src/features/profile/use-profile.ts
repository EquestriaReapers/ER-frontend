import { fetchOneProfile } from "../../core/profiles/fetch-one-profile.service";
import { Profile } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";
import { useErrorToast } from "hooks/use-error-toast";

export default function useProfile(id: number | null) {
  const [isFirstTimeLoaded, setIsFirstTimeLoaded] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const { showErrorToast } = useErrorToast();

  const fetchProfile = useCallback(async () => {
    try {
      if (!id) return;
      setLoading(true);
      const data = await fetchOneProfile(id);
      setProfile(data);
    } catch (error) {
      showErrorToast(error);
    } finally {
      setIsFirstTimeLoaded(true);
      setLoading(false);
    }
  }, [id, setProfile, showErrorToast]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, isFirstTimeLoaded, loading, fetchProfile };
}
