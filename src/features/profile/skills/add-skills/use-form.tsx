import { useAuthState } from "hooks/use-auth-state";
import { addProfileSkill } from "../../services/profile.service";
import { FormEvent, useCallback } from "react";

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
        console.log(error);
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
