import { editAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback } from "react";
import { ExperienceContent } from "../../modal/types";

const useEditExperienceForm = ({
  setContent,
  newExperience,
  experienceId,
}: EditExperienceFormProps) => {
  const { token } = useAuthState();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !newExperience || !experienceId) return;
        const data = await editAProfileExperience(
          newExperience,
          token,
          experienceId
        );
        showSuccessToast("Experiencia editada con éxito");
        setContent(ExperienceContent.Show);
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },

    [
      token,
      setContent,
      showErrorToast,
      showSuccessToast,
      experienceId,
      newExperience,
    ]
  );
  return { onSubmitForm };
};

export interface EditExperienceFormProps {
  setContent: (arg0: ExperienceContent) => void;
  newExperience: {
    businessName: string;
    role: string;
    location: string;
    description: string;
  };
  experienceId: number;
}

export default useEditExperienceForm;
