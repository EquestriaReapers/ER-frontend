import { useCallback } from "react";

// Own
import { removeProfileSkill } from "features/profile/services/profile/remove-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";

const useDeleteSkill = ({ skillId, setIsOpen }: Props) => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  const deleteSkill = useCallback(async () => {
    try {
      if (!token || !skillId) return;
      await removeProfileSkill(token, skillId);
      setIsOpen(false);
      return;
    } catch (error) {
      showErrorToast(error);
    }
  }, [setIsOpen, showErrorToast, skillId, token]);

  return deleteSkill;
};

export interface Props {
  skillId: number;
  setIsOpen: (isOpen: boolean) => void;
}
export default useDeleteSkill;
