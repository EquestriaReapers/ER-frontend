import { useAuthState } from "hooks/use-auth-state";
import { updateProfileSkill } from "../../services/profile.service";
import { FormEvent } from "react";

const useForm = ({ setIsOpen, selectedSkillId }: useFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !selectedSkillId) return;
      const skillId = parseInt(selectedSkillId);
      const data = await updateProfileSkill(token, { skillId });
      setIsOpen(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitForm };
};

export interface useFormProps {
  setIsOpen: (arg0: boolean) => void;
  selectedSkillId: string;
}
export default useForm;
