import useProfileContext from "features/profile/profile-context/use-profile-context";
import { updateProfileLocation } from "core/profiles/update-profilelocation.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useUpdateLocation = ({ setLoading }: Options) => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  return useCallback(
    async (countryResidence: string) => {
      try {
        if (!token) return;
        setLoading(true);
        const data = await updateProfileLocation(token, { countryResidence });
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchProfile, setLoading, showErrorToast, token]
  );
};

interface Options {
  setLoading: (loading: boolean) => void;
}

export default useUpdateLocation;
