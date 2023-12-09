import { editAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { FormEvent } from "react";

const useEditExperienceForm = ({
  setContent,
  newExperience,
  experienceId,
}: EditExperienceFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !newExperience || !experienceId) return;
      const data = editAProfileExperience(newExperience, token, experienceId);
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
  newExperience: {
    businessName: string;
    role: string;
    location: string;
    description: string;
  };
  experienceId: number;
}

export default useEditExperienceForm;
