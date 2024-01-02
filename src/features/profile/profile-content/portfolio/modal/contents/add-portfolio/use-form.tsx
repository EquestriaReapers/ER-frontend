import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";

import { Dayjs } from "dayjs";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { addProjectToProfile } from "core/portfolio/add-project.service";

const useAddProjectForm = ({ project }: Props) => {
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const { setContent, setLoading } = useContext(PortfolioModalContext);
  const { fetchProfile } = useProfileContext();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = getToken();
        if (
          !project.title ||
          !project.description ||
          !project.location ||
          !project.dateEnd
        ) {
          showErrorToast("Por favor, rellena todos los campos");
          return;
        }

        const data = await addProjectToProfile(token, {
          title: project.title,
          description: project.description,
          location: project.location,
          dateEnd: project.dateEnd?.format("YYYY-MM-DD"),
          imagePrincipal: project.imagePrincipal!,
          image: project.image!,
        });

        setLoading(true);
        setContent(PortfolioContent.Show);
        showSuccessToast("Proyecto agregado con éxito");
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [
      project.dateEnd,
      project.description,
      project.imagePrincipal,
      project.image,
      project.location,
      project.title,
      getToken,
      setLoading,
      setContent,
      showSuccessToast,
      fetchProfile,
      showErrorToast,
    ]
  );

  return onSubmitForm;
};

export interface Props {
  project: {
    title: string;
    description: string;
    location: string;
    dateEnd: Dayjs | null;
    imagePrincipal?: string;
    image: File[] | null;
  };
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

export default useAddProjectForm;
