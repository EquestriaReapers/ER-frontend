import useProfileContext from "features/profile/profile-context/use-profile-context";
import { addProfileSkill } from "features/profile/services/profile/add-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useAddSkill = ({ setLoading }: Options) => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  return useCallback(
    async (skillId: number) => {
      try {
        if (!token) return;
        setLoading(true);
        const data = await addProfileSkill(token, { skillId });
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

export default useAddSkill;
