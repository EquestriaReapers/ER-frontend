import { updateCVExperience } from "core/experience/update-CV-experience";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { Experience } from "core/profiles/types";
import ExperiencesModalContext from "features/profile/profile-content/experiences/modal/experiences-modal-context";

const useUpdateExperienceCV = (isVisible: boolean, experience: Experience) => {
  const getToken = useGetToken();
  const { setLoading } = useContext(ExperiencesModalContext);
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const { fetchProfile } = useProfileContext();
  const token = getToken();

  return useCallback(async () => {
    try {
      setLoading(true);
      const data = await updateCVExperience(
        { isVisible },
        token,
        experience.id
      );
      await fetchProfile();
      if (isVisible) {
        showSuccessToast(
          `Experiencia en ${experience.businessName} se mostrara en el CV ✅.`
        );
      } else {
        showSuccessToast(
          `Experiencia en ${experience.businessName} no se mostrara en el CV ❌.`
        );
      }
      return data;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    experience.businessName,
    experience.id,
    fetchProfile,
    isVisible,
    setLoading,
    showErrorToast,
    showSuccessToast,
    token,
  ]);
};

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();
  console.log(token);
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
