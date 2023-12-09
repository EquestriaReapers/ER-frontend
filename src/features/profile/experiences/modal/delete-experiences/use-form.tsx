import { deleteAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback } from "react";

const useDeleteExperienceForm = ({
  setContent,
  experienceId,
}: DeleteExperienceFormProps) => {
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
        setContent(0);
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

export interface DeleteExperienceFormProps {
  setContent: (arg0: number) => void;
  experienceId: number;
}

export default useDeleteExperienceForm;
