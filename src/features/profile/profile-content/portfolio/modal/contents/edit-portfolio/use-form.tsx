import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { Dayjs } from "dayjs";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { updateProfileProject } from "core/portfolio/edit-project.service";
import { deleteAProjectImage } from "core/portfolio/delete-project-image.service";

const useForm = ({
  project,
  projectId,
  deletedImages,
  newFiles,
}: EditProjectFormProps) => {
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
        setLoading(true);

        let _deletedImagesIndexes = [...deletedImages];
        _deletedImagesIndexes.sort((a, b) => a - b);

        for (let i = 0; i < _deletedImagesIndexes.length; i++) {
          const currentIndex = _deletedImagesIndexes[i];
          await deleteAProjectImage(token, projectId, currentIndex);
          _deletedImagesIndexes = _deletedImagesIndexes.map((index) =>
            index > currentIndex ? index - 1 : index
          );
        }

        const editProjectData = await updateProfileProject(token, projectId, {
          title: project.title,
          description: project.description,
          location: project.location,
          dateEnd: project.dateEnd?.format("YYYY-MM-DD"),
          imagePrincipal: project.imagePrincipal,
          image: newFiles,
        });
        showSuccessToast("Proyecto editado con éxito");
        setContent(PortfolioContent.Show);
        await fetchProfile();
        return editProjectData;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [
      getToken,
      project.dateEnd,
      project.description,
      project.imagePrincipal,
      project.location,
      project.title,
      deletedImages,
      setLoading,
      projectId,
      showSuccessToast,
      setContent,
      fetchProfile,
      showErrorToast,
      newFiles,
    ]
  );

  return onSubmitForm;
};

export interface EditProjectFormProps {
  project: {
    title: string;
    description: string;
    location: string;
    dateEnd: Dayjs | null;
    imagePrincipal?: File | null;
  };
  projectId: number;
  deletedImages: number[];
  newFiles: File[];
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
