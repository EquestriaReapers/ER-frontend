import { deleteAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { FormEvent } from "react";

const useDeleteExperienceForm = ({
  setContent,
  experienceId,
}: EditExperienceFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !experienceId) return;
      const data = deleteAProfileExperience(token, experienceId);
      setContent(0);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitForm };
};

export interface EditExperienceFormProps {
  setContent: (arg0: number) => void;
  experienceId: number;
}

export default useDeleteExperienceForm;
