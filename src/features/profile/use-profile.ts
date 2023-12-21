import { fetchOneProfile } from "./services/profile.service";
import { Profile } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";

export default function useProfile(id: number) {
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = useCallback(async () => {
    try {
      if (!id) return;
      const data = await fetchOneProfile(id);
      setProfile(data);
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  }, [id, setProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return profile;
}
