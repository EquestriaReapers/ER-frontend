import { useAuthState } from "hooks/use-auth-state";
import { addProfileSkill } from "../../services/profile.service";
import { FormEvent, useCallback } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";

const useForm = ({ setIsOpen, selectedSkillId }: Props) => {
  const { token } = useAuthState();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !selectedSkillId) return;
        const skillId = parseInt(selectedSkillId);
        const data = await addProfileSkill(token, { skillId });
        setIsOpen(false);
        return data;
      } catch (error) {
        if (error instanceof BackendError) {
          toast.error(error.message);
        } else {
          toast.error("Error desconocido");
        }
      }
    },
    [selectedSkillId, setIsOpen, token]
  );
  return { onSubmitForm };
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  selectedSkillId: string;
}
export default useForm;
