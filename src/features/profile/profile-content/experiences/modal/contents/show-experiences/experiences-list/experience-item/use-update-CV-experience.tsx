import { updateCVExperience } from "core/experience/update-CV-experience";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const useUpdateExperienceCV = () => {
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const { fetchProfile } = useProfileContext();
  const token = getToken();

  return useCallback(
    async (isVisible: boolean, experienceID: number) => {
      try {
        const data = await updateCVExperience(
          { isVisible },
          token,
          experienceID
        );
        showSuccessToast("Experiencia agregada con éxito");
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [fetchProfile, showErrorToast, token, showSuccessToast]
  );
};

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

export default useUpdateExperienceCV;
