import { deleteAProfileExperience } from "core/experience/delete-profile-experience";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback, useContext } from "react";
import { ExperienceContent } from "../../experiences-modal-context/types";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import ExperiencesModalContext from "../../experiences-modal-context";

const useDeleteExperience = ({ experienceId }: Payload) => {
  const { setContent, setLoading } = useContext(ExperiencesModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const deleteExperience = useCallback(async () => {
    try {
      const token = getToken();
      const data = await deleteAProfileExperience(token, experienceId);
      setContent(ExperienceContent.Show);
      showSuccessToast("Experiencia borrada con éxito");
      setLoading(true);
      await fetchProfile();
      return data;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    experienceId,
    fetchProfile,
    getToken,
    setContent,
    setLoading,
    showErrorToast,
    showSuccessToast,
  ]);

  return deleteExperience;
};

export interface Payload {
  experienceId: number;
}

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();

  return useCallback(() => {
    if (!token) {
      navigate("/login");
      throw new Error(
        "No se ha encontrado un token local para hacer la peticion"
      );
    }

    return token;
  }, [navigate, token]);
}

export default useDeleteExperience;
