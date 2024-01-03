import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { deleteAProfileProject } from "core/portfolio/delete-project.service";

const useDeleteProject = ({ projectId }: Payload) => {
  const { setContent, setLoading } = useContext(PortfolioModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const deleteProject = useCallback(async () => {
    try {
      const token = getToken();
      const data = await deleteAProfileProject(token, projectId);
      setContent(PortfolioContent.Show);
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
    projectId,
    fetchProfile,
    getToken,
    setContent,
    setLoading,
    showErrorToast,
    showSuccessToast,
  ]);

  return deleteProject;
};

export interface Payload {
  projectId: number;
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

export default useDeleteProject;
