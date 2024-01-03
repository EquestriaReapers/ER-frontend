import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { updateProfileProject } from "core/portfolio/edit-project.service";

const useForm = ({ project, projectId }: EditProjectFormProps) => {
  const { setContent, setLoading } = useContext(PortfolioModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = getToken();
        if (!project.imagePrincipal) {
          showErrorToast("Por favor, sube una imágen");
          return;
        }

        setLoading(true);
        const data = await updateProfileProject(token, projectId, {
          imagePrincipal: project.imagePrincipal,
        });
        showSuccessToast("Experiencia editada con éxito");
        setContent(PortfolioContent.Show);
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [
      getToken,
      project.imagePrincipal,
      setLoading,
      projectId,
      showSuccessToast,
      setContent,
      fetchProfile,
      showErrorToast,
    ]
  );

  return onSubmitForm;
};

export interface EditProjectFormProps {
  project: {
    imagePrincipal?: File | null;
  };
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

export default useForm;
