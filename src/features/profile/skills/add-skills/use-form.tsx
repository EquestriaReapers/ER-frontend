import { useAuthState } from "hooks/use-auth-state";
import { FormEvent, useCallback } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import { addProfileSkill } from "features/profile/services/profile/add-profile-skill.service";

const useForm = ({ setIsOpen, selectedSkillId }: Props) => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

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
        showErrorToast(error);
      }
    },
    [selectedSkillId, setIsOpen, token, showErrorToast]
  );
  return { onSubmitForm };
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  selectedSkillId: string;
}

export default useForm;
