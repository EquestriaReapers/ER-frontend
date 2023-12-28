import { useCallback } from "react";

// Own
import { removeProfileSkill } from "features/profile/services/profile/remove-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const useDeleteSkill = (skillId: number) => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();

  const deleteSkill = useCallback(async () => {
    try {
      if (!token || !skillId) return;
      const data = await removeProfileSkill(token, skillId);
      showSuccessToast(data.message);
      fetchProfile();
      return;
    } catch (error) {
      showErrorToast(error);
    }
  }, [token, skillId, showSuccessToast, fetchProfile, showErrorToast]);

  return deleteSkill;
};

export default useDeleteSkill;