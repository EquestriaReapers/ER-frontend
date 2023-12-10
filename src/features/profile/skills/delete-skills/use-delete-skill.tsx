import { BackendError } from "app/exceptions";
import { removeProfileSkill } from "features/profile/services/profile.service";
import { useAuthState } from "hooks/use-auth-state";
import { toast } from "sonner";

const useDeleteSkill = ({ skillId, setIsOpen }: Props) => {
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

export interface Props {
  skillId: number;
  setIsOpen: (isOpen: boolean) => void;
}
export default useDeleteSkill;
