import { addAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import ExperiencesModalContext from "../../experiencies-modal-context";

const useAddExperienceForm = ({ experience, fetchProfile }: AddExperienceFormProps) => {
  const { token } = useAuthState();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const { setContent } = useContext(ExperiencesModalContext);

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !experience) return;
        const data = addAProfileExperience(experience, token);
        setContent(ExperienceContent.Show);
        showSuccessToast("Experiencia agregada con éxito");
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },

    [token, experience, setContent, showErrorToast, showSuccessToast]
  );
  return { onSubmitForm };
};

export interface AddExperienceFormProps {
  experience: {
    businessName: string;
    role: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    description: string;
  };
  fetchProfile: () => void;
}

export default useAddExperienceForm;
