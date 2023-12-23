import { removeProfileSkill } from "features/profile/services/profile/remove-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";

const useDeleteSkill = ({ skillId, setIsOpen }: Props) => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const onDeleteSkill = async () => {
    try {
      if (!token || !skillId) return;
      const data = await removeProfileSkill(token, skillId);
      setIsOpen(false);
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  };
  return { onDeleteSkill };
};

export interface Props {
  skillId: number;
  setIsOpen: (isOpen: boolean) => void;
}
export default useDeleteSkill;
