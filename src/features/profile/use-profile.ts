import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "./services/profile/fetch-one-profile.service";
import { Profile } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";
import { createContext } from 'react';

export default function useProfile(id: number) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { token } = useAuthState();

  const getProfile = useCallback(async () => {
    try {
      if (!token || !id) return;
      const data = await fetchOneProfile(token, id);
      console.log(token);
      setProfile(data);
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  }, [token, id, setProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return profile;
}
