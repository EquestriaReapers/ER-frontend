import { deleteAProfileEducation } from "core/auth/education/delete-profile-education";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback, useContext } from "react";
import { EducationContent } from "../../education-modal-context/types";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import EducationModalContext from "../../education-modal-context";

const useDeleteEducation = ({ educationId }: Payload) => {
  const { setContent, setLoading } = useContext(EducationModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const deleteEducation = useCallback(async () => {
    try {
      const token = getToken();
      setLoading(true);
      const data = await deleteAProfileEducation(token, educationId);
      setContent(EducationContent.Show);
      showSuccessToast("Educación borrada con éxito");
      fetchProfile();
      return data;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    educationId,
    fetchProfile,
    getToken,
    setContent,
    setLoading,
    showErrorToast,
    showSuccessToast,
  ]);

  return deleteEducation;
};

export interface Payload {
  educationId: number;
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

export default useDeleteEducation;
