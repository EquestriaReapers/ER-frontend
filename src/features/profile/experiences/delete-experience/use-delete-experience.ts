import { removeProfileSkill } from "features/profile/services/profile.service";
import { useAuthState } from "hooks/use-auth-state";

const useDeleteSkill = ({ skillId, setIsOpen }: UseDeleteSkillProps) => {
  const { token } = useAuthState();
  const onDeleteSkill = async () => {
    try {
      if (!token || !skillId) return;
      const data = await removeProfileSkill(token, skillId);
      setIsOpen(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onDeleteSkill };
};

export interface UseDeleteSkillProps {
  skillId: number;
  setIsOpen: (arg0: boolean) => void;
}
export default useDeleteSkill;
