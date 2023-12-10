import { removeProfileSkill } from "features/profile/services/profile.service";
import { useAuthState } from "hooks/use-auth-state";

const useDeleteSkill = ({ skillId, setIsOpen }: Props) => {
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

export interface Props {
  skillId: number;
  setIsOpen: (isOpen: boolean) => void;
}
export default useDeleteSkill;
