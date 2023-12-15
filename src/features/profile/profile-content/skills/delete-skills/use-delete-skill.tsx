import { useCallback } from "react";

// Own
import { removeProfileSkill } from "features/profile/services/profile/remove-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";

const useDeleteSkill = ({ skillId }: Props) => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();

  const deleteSkill = useCallback(async () => {
    try {
      if (!token || !skillId) return;
      const data = await removeProfileSkill(token, skillId);
      showSuccessToast(data.message);
      return;
    } catch (error) {
      showErrorToast(error);
    }
  }, [showSuccessToast, showErrorToast, skillId, token]);

  return deleteSkill;
};

export interface Props {
  skillId: number;
}
export default useDeleteSkill;
