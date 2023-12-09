import { deleteAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback } from "react";
import { ExperienceContent } from "../../modal/types";

const useDeleteExperienceForm = ({ setContent, experienceId }: Payload) => {
  const { token } = useAuthState();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !experienceId) return;
        const data = await deleteAProfileExperience(token, experienceId);
        console.log(data);
        setContent(ExperienceContent.Show);
        showSuccessToast("Experiencia borrada con éxito");
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [experienceId, setContent, showErrorToast, showSuccessToast, token]
  );
  return { onSubmitForm };
};

export interface Payload {
  setContent: (arg0: ExperienceContent) => void;
  experienceId: number;
}

export default useDeleteExperienceForm;
