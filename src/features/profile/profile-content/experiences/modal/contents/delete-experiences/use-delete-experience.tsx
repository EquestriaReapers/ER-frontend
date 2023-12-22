import { deleteAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback } from "react";
import { ExperienceContent } from "../../experiencies-modal-context/types";

const useDeleteExperience = ({ setContent, experienceId, fetchProfile }: Payload) => {
  const { token } = useAuthState();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const deleteExperience = useCallback(async () => {
    try {
      if (!token || !experienceId) return;
      const data = await deleteAProfileExperience(token, experienceId);
      console.log(data);
      setContent(ExperienceContent.Show);
      showSuccessToast("Experiencia borrada con éxito");
      fetchProfile();
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  }, [experienceId, setContent, showErrorToast, showSuccessToast, token]);
  return deleteExperience;
};

export interface Payload {
  setContent: (arg0: ExperienceContent) => void;
  experienceId: number;
  fetchProfile: () => void;
}

export default useDeleteExperience;
