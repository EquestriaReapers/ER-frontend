import { updateCVEducation } from "core/education/update-CV-education";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import EducationModalContext from "../../../../education-modal-context";
import { useSuccessToast } from "hooks/use-success-toast";
import { Education } from "core/profiles/types";

const useUpdateEducationCV = (isVisible: boolean, education: Education) => {
  const getToken = useGetToken();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const { fetchProfile } = useProfileContext();
  const { setLoading } = useContext(EducationModalContext);
  const token = getToken();

  return useCallback(async () => {
    try {
      setLoading(true);
      const data = await updateCVEducation({ isVisible }, token, education.id);
      await fetchProfile();
      if (isVisible) {
        showSuccessToast(
          `${education.title} de ${education.entity} se mostrara en el CV ✅.`
        );
      } else {
        showSuccessToast(
          `${education.title} de ${education.entity} no se mostrara en el CV ❌.`
        );
      }

      return data;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    education.entity,
    education.id,
    education.title,
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

export default useUpdateEducationCV;
