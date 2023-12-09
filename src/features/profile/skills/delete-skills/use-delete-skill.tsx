import { BackendError } from "app/exceptions";
import { removeProfileSkill } from "features/profile/services/profile.service";
import { useAuthState } from "hooks/use-auth-state";
import { toast } from "sonner";

const useDeleteSkill = ({ skillId, setIsOpen }: UseDeleteSkillProps) => {
  const { token } = useAuthState();
  const onDeleteSkill = async () => {
    try {
      if (!token || !skillId) return;
      const data = await removeProfileSkill(token, skillId);
      setIsOpen(false);
      return data;
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  };
  return { onDeleteSkill };
};

export interface UseDeleteSkillProps {
  skillId: number;
  setIsOpen: (arg0: boolean) => void;
}
export default useDeleteSkill;
