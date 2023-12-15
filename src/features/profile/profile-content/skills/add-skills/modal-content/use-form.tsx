import { addProfileSkill } from "features/profile/services/profile/add-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { FormEvent, useCallback } from "react";

const useAddSkillForm = (selectedSkillId: number) => {
  const { token } = useAuthState();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !selectedSkillId) return;
        const skillId = selectedSkillId;
        const data = await addProfileSkill(token, { skillId });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [selectedSkillId, token]
  );
  return { onSubmitForm };
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  selectedSkillId: string;
}

export default useAddSkillForm;
